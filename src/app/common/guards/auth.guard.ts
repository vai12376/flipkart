/** @format */

import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login/login.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(route.data["role"]);

    if (this.loginService.authSub.value && route.data["role"]) {
      console.log(this.loginService.authSub.value.role);
      if (this.loginService.authSub.value.role == route.data["role"]) {
        return true;
      }
    }

    this.router.navigate(["login"], {
      state: { data: `${route.data["role"]}` },
    });
    return false;
  }
}
