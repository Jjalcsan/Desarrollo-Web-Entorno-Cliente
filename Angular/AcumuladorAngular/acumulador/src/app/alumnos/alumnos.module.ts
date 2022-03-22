import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from "./listado/listado.component";
import { AlumnosComponent } from "./alumnos/alumnos.component";

@NgModule({
    declarations: [
        AlumnosComponent,
        ListadoComponent
    ],
    exports: [
        AlumnosComponent,
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AlumnosModule{}