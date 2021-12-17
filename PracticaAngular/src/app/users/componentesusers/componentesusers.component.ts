import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentesusers',
  templateUrl: './componentesusers.component.html'
})
export class ComponentesusersComponent implements OnInit {

  constructor() { }

  "users" : [    
    {
      "id": 1,
      "name": 'Jack',
      "email": 'jack@iesjacaranda.es'
    },    
    {
      "id": 2,
      "name": 'Claire',
      "email": 'claire@iesjacaranda.es'
    },    
    {
      "id": 3,
      "name": 'Jamie',
      "email": 'jamie@iesjacaranda.es'
    }  
  ]

  ngOnInit(): void {
  }

}
