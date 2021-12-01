import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class GifsServiceService {

private apiKey: string ='apikey'
private servicioUrl: string ='';
private historial: string[] = [];

getHistorial(){
return 
}

/*
const params = new HttpParams()
.set('api_key', this.apiKey)
.set('limit', 10)
.set('q', query)

buscarGifs(){
this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params}){
.subscribe( (resp) =>{
console.log(resp.data);
resp.data[0].images.downsized_medium.url;
})
}
}
*/

constructor() { }
}