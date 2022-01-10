import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users/users.component';
import { ServersComponent } from './servers/servers/servers.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'servers', component: ServersComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ServersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
