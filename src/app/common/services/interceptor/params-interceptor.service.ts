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

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("params");
    const paramReq = req.clone({
      params: req.params.append("userId", "5"),
    });
    return next.handle(paramReq);
  }
}
