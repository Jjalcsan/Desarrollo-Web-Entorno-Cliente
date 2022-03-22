import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  nombre: string = "Juan Jose";
  edad: number = 21;
  get nombreMays():string{
    return this.nombre.toUpperCase();
  }

  cambiarNombre():void{
    this.nombre="Otro";
  }

  cambiarEdad():void{
    this.edad=25;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
