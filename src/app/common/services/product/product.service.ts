/** @format */

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, switchMap, throwError } from "rxjs";

import { environment } from "src/environments/environment";
import { IpcNetConnectOpts } from "net";
import { IProductData } from "../../models/interfaces";
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  url = environment._baseUrl;

  cartItems: number[];

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
  editProduct(id: number, product: any) {
    return this.http.put(this.url + `/${id}`, product);
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

  addProductToCart(id: number) {
    this.cartItems.push(id);
  }
}
