/** @format */

import { Component, OnInit } from "@angular/core";
import { IProductData } from "src/app/common/models/interfaces";
import { CartService } from "src/app/common/services/cart/cart.service";
import { ProductsService } from "src/app/common/services/product/product.service";

@Component({
  selector: "app-cart-main",
  templateUrl: "./cart-main.component.html",
  styleUrls: ["./cart-main.component.css"],
})
export class CartMainComponent implements OnInit {
  cart: number[] = [];
  productList: IProductData[] = [];
  itemCount = 0;
  totalAmount = 0;
  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.cartItems;

    if (this.cart.length) {
      this.cart.forEach((itemId) => {
        this.productService.getProductById(itemId).subscribe((product) => {
          this.productList.push(product);
          this.totalAmount += product.price;
        });
      });
    }
  }
}
