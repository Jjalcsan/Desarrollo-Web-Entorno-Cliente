import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent}
  ]},
  { path: 'servers', canActivateChild:[AuthGuardService], component: ServersComponent, children: [
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard], resolve: { server: ServerResolver}}, 
    { path: ':id', component: ServerComponent}
  ]},
  { path: 'users', component: UserComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found :('}},
  { path: '**', redirectTo: '/not-found'}
  
];

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
