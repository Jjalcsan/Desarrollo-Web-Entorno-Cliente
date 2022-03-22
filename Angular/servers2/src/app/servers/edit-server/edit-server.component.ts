//el archivo edit-server.component.ts está usando el servicio Servers para obtener el server con el ID 1 y poder actualizarlo.

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from '../interfaces/server.interface';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html'
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server!: Server;
  serverName = '';
  serverStatus = '';

  allowEdit = false;

  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      })

      const id = +this.route.snapshot.params['id']
      this.server = this.serversService.getServer(id);    
  };

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to exit without saving your changes?');
    } else {
      return true;
    }
  } 

}