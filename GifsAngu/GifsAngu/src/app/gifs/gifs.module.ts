import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { GifsServiceService } from './service/gifs-service.service';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  exports: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GifsServiceService
  ]
})
export class GifsModule { }
