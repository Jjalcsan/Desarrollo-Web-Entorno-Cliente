import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libros } from './libro.interface';

@Injectable({
    providedIn: 'root'
})

export class ListadoService {

    constructor(private http: HttpClient) { }

    loadAPI(busca: string){

        const params = new HttpParams()
        .set('title', busca)
        .set('limit', '10');

        return this.http.get<Libros>(`https://openlibrary.org/search.json`,{ params:params });
    }

    loadLibro(libro: string){

        return this.http.get<Libros>(`https://openlibrary.org/search.json?isbn=${libro}`);
    }

}