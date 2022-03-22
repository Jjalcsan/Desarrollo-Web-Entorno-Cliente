import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomaticoComponent } from './automatico.component';



@NgModule({
  declarations: [
    AutomaticoComponent
  ],
  exports: [
    AutomaticoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutomaticoModule { }
