import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListadoPageRoutingModule } from './listado-routing.module';
import { ListadoPage } from './listado.page';
import { ListadoService } from './listado.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ListadoPageRoutingModule,
      HttpClientModule
    ],
    declarations: [ListadoPage],
    providers:[ListadoService]
  })
  export class ListadoPageModule {}