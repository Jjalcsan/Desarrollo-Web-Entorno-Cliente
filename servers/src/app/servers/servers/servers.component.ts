import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ]
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];
  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

}
