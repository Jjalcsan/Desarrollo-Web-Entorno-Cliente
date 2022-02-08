import { Component, OnInit } from '@angular/core';
import { Doc } from './libro.service';
import { LibroService } from './listado.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  constructor(private libroService : LibroService) { }

    ngOnInit(): void {
        this.listadoLibros();
    }

    listado: Doc[] = [];

    listadoLibros(){
      this.libroService.loadAPI()
      .subscribe(resp => {
        this.listado = resp.docs;
      },error => {
        console.log(error);
      })

    }

}