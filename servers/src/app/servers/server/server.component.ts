import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent implements OnInit {
  server!: Server;

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
