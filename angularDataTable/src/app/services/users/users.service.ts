import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //usuarios: Users [] = []
  private usuarios:any = []

  constructor(private http: HttpClient) { }

  users() {
    return this.http.get('https://jsonplaceholder.typicode.com/users') ;
  }

  getData(){
    const url ='https://jsonplaceholder.typicode.com/users'
    this.http.get(url).subscribe((res)=>{
      this.usuarios = res
      console.log(this.usuarios)
    })
  }
}
