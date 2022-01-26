import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
 
@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivate, CanActivateChild {
      
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any {
    return this.authService
      .isAuthenticated()

      .then((authenticated) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      });
    }

    //Cómo proteger las child routes usando canActivateChild
    canActivateChild(route: ActivatedRouteSnapshot, 

        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.canActivate(route, state);

}
}