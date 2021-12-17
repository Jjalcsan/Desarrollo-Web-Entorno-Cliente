import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers/servers.component';



@NgModule({
  declarations: [
    ServersComponent
  ],
  exports: [
    ServersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServersModule { }
