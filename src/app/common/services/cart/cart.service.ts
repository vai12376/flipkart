/** @format */

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  itemCountSub = new BehaviorSubject<number>(0);

  cartItems: number[] = [];

  addToCart(id: number) {
    this.cartItems.push(id);
    this.itemCountSub.next(this.cartItems.length);
  }
}
