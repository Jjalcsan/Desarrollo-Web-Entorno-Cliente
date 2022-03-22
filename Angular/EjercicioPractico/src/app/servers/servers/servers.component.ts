import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { FormsModule } from '@angular/forms';
import { Server } from '../servers.interface'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];


  constructor(private serversService : ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }


}
