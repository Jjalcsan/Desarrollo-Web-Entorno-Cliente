import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent {

  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  passwordError: boolean | undefined;

  constructor(public userService: UsersService, public router: Router) {}

  register() {
    const user = { email: this.email, password: this.password};
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/')
    },
    error => {
      console.log(error);
    });
  }


}