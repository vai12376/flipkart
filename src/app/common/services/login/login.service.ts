/** @format */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  authSub: BehaviorSubject<any>;
  role: any;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.authSub = new BehaviorSubject(
      JSON.parse(localStorage.getItem("authData"))
    );
  }

  login(data: any, role: any) {
    console.log(data);
    this.httpClient
      .post("http://localhost:4000/users/authenticate", data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.authSub.next(res);
          localStorage.setItem("authData", JSON.stringify(res));
          if (role == "User") {
            this.router.navigate(["product", "list"]);
          } else if (role == "Admin") {
            this.router.navigate(["product", "add"]);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
