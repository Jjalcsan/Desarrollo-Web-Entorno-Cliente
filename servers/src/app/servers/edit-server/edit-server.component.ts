import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styles: [
  ]
})
export class EditServerComponent implements OnInit {

  server!: Server;
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
