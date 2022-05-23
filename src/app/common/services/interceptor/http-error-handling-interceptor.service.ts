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
export class HttpErrorHandlingInterceptor implements HttpInterceptor {
  // constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMsg = "";

    if (error.error instanceof ErrorEvent) {
      console.log("This is client side error");
      errorMsg = `Client Error: ${error.error.message}`;
    } else {
      console.log("This is server side error");
      errorMsg = `Server Error Code: ${error.status},  Message: ${error.message}`;
    }

    return throwError(() => errorMsg);
  }
}
