import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(event:any){
    this.nuevo.nombre=event.target.value;
  }

  agregarNuevoPersonaje(personaje:Personaje){
    this.personajes.push(personaje);
  }

}
