import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos/alumnos.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { ListadoComponent } from './alumnos/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AcumuladorComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
