/** @format */

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, switchMap, throwError } from "rxjs";
import { IProductData } from "../interfaces";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  url = environment._baseUrl;

  constructor(private http: HttpClient) {}

  getProductByCategory(category: any) {
    return this.http.get<IProductData[]>(this.url + `/category/${category}`);
  }

  getAllProducts() {
    return this.http.get<IProductData[]>(this.url);
  }

  getProductById(id: number) {
    return this.http.get<IProductData>(this.url + `/${id}`);
  }

  addProduct(product: IProductData) {
    return this.http.post<IProductData>(this.url, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + `/${id}`);
  }

  getCategories() {
    return this.http.get<string[]>(this.url + "/categories");
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
