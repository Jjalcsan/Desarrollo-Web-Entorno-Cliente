import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent {

  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  passwordError: boolean | undefined;

  constructor(public userService: UsersService) {}

  register() {
    const user = { email: this.email, password: this.password};
    this.userService.register(user).subscribe(data => {
      console.log(data);
    })
  }


}