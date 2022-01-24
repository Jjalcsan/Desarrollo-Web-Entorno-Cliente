import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  email: string | undefined;
  password: string | undefined; 

  constructor(public userService : UsersService, public router: Router) { }

  login(){

    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( (data: any) => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

}
