/** @format */

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { IProductData } from "../interfaces";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  url = environment._baseUrl;

  constructor(private http: HttpClient) {}

  getProductByCategory(category: any) {
    return this.http
      .get<IProductData[]>(this.url + `/category/${category}`)
      .pipe(catchError(this.handleError));
  }
  getAllProducts() {
    return this.http
      .get<IProductData[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  getProductById(id: number): Observable<any> {
    return this.http
      .get<IProductData>(this.url + `/${id}`)
      .pipe(catchError(this.handleError));
  }

  addProduct(product: IProductData) {
    return this.http
      .post<IProductData>(this.url, product)
      .pipe(catchError(this.handleError));
  }

  deleteProduct(id: number) {
    return this.http
      .delete(this.url + `/${id}`)
      .pipe(catchError(this.handleError));
  }

  getCategories() {
    return this.http
      .get<string[]>(this.url + "/categories")
      .pipe(catchError(this.handleError));
  }

  handleError(err: any) {
    let errorMsg = "";
    if (err instanceof HttpErrorResponse) {
      console.log("server side error");
      //server side error
      errorMsg = `Server Error Code:${err.status} and Error message: ${err.message}`;
    } else {
      //client side error
      console.log("client side error");
      errorMsg = `Client Error :${err.error.message}`;
    }
    return throwError(() => {
      return errorMsg;
    });
  }
}
