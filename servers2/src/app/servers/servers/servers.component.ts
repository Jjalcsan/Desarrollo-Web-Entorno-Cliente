import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server } from '../interfaces/server.interface';
import { ServersService } from '../servers.service';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];
  public server!: Server;

  constructor(private serversService: ServersService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();

   }

  onReload() {
    
    console.log(this.route);

    this.router.navigate(['servers'], { relativeTo: this.route });
  
  }

}