import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje={nombre:'',salud:0};
  constructor() { }

  ngOnInit(): void {
  }
  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter()
  agregar(){
    this.onNewCharacter.emit(this.nuevo)
    //this.personajes.push(this.nuevo);
    this.nuevo{
      nombre = "",
      salud = 0

    }

  }

}
