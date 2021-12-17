import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  servers = [    
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

  constructor() { }

  ngOnInit(): void {
  }

}
