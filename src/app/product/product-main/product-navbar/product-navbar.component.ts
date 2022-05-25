/** @format */

import { Component, OnInit } from "@angular/core";
import { RouteConfigLoadEnd, Router } from "@angular/router";
import { CartService } from "src/app/common/services/cart/cart.service";
import { ProductsService } from "src/app/common/services/product/product.service";

@Component({
  selector: "app-product-navbar",
  templateUrl: "./product-navbar.component.html",
  styleUrls: ["./product-navbar.component.css"],
})
export class ProductNavbarComponent implements OnInit {
  categories: String[] = [];
  cartItemCountSub;
  constructor(
    private productService: ProductsService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartItemCountSub = this.cartService.itemCountSub;
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
  onAddProduct() {}

  navigateToCart() {
    this.router.navigate(["cart"]);
  }
}
