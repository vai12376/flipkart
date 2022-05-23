/** @format */

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const authHeader = this.auth.getToken();
    const authHeader = "Bearer 1A2b3C4d5E6f7G8h9IAgBKClD";

    const authReq = req.clone({
      headers: req.headers.set("Authorization", authHeader),
    });

    return next.handle(authReq);
  }
}
