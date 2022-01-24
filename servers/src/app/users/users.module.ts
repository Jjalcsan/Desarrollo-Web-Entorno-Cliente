import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
