import { Injectable } from '@angular/core';
import { Server } from './servers.interface'

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }
  private servers: Server[] = [
    {
    id: 1,
    name: 'Productionserver',
    status: 'online'
    },
    {
    id: 2,
    name: 'Testserver',
    status: 'offline'
    },
    {
    id: 3,
    name: 'Devserver',
    status: 'offline'
    }
  ]

  getServers(){
    return this.servers;
  }
}
