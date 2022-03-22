import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string; 

  constructor(public userService : UsersService, public router: Router) { }

  login(){

    this.userService.login(this.email, this.password).subscribe( resp => {
      this.userService.setToken(JSON.stringify(resp));
      this.router.navigateByUrl('/servers');
    },
    error => {
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

}
