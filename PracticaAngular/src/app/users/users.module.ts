import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesusersComponent } from './componentesusers/componentesusers.component';



@NgModule({
  declarations: [
    ComponentesusersComponent
  ],
  exports: [
    ComponentesusersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
