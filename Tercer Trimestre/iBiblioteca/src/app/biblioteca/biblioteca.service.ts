import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from './biblioteca.interface';

@Injectable({
    providedIn: 'root'
})

export class BibliotecaService {

    constructor(private http : HttpClient) { }

    cargarLibros() {

        const params = new HttpParams()
        .set('title', "JavaScript")
        .set('limit', '10');

        return this.http.get<Libros>(`https://openlibrary.org/search.json`,{ params:params});

    }

    realizarBusqueda(busqueda: string): Observable<Libros>{

        const params = new HttpParams()
       .set('title', busqueda)
       .set('limit', '10');

        return this.http.get<Libros>(`https://openlibrary.org/search.json`, {params: params});
   }

}