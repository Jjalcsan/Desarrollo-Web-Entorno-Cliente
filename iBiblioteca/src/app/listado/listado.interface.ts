import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libros } from './libro.service';
import { Doc } from './libro.service';

@Injectable({
    providedIn: 'root'
})

export class LibroService {

    constructor(private http: HttpClient) { }

    loadAPI(){

        const params = new HttpParams()
        .set('title', 'Java')
        .set('limit', '10');

        return this.http.get<Libros>(`https://openlibrary.org/search.json`,{ params:params });
    }

}