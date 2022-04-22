import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from './biblioteca.service';
import { Libros, Doc } from './biblioteca.interface';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor(private listado: BibliotecaService) { }

  ngOnInit() {

    this.listadoLibros();

  }

  libros: Doc[] = []

  listadoLibros(){

    this.listado.cargarLibros()

    .subscribe(resp => {

      this.libros = resp.docs;
      
    }
    ,error => {

      console.log(error);

    })
  }

}
