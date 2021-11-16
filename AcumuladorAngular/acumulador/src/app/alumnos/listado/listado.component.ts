import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  alumnos: string[] = ["Fran", "Joaquin", "Javier", "Cristina", "Estefania"];

  eliminados: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
