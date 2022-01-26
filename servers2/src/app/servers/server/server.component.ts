import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Server } from '../interfaces/server.interface';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  server!: Server;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.data.subscribe( 
      (data: Data) => {
        this.server = data['server'];
      }
    )
  }

  onEdit() {

    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});

  }

}