/** @format */

import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/common/service/products.service";

@Component({
  selector: "app-product-navbar",
  templateUrl: "./product-navbar.component.html",
  styleUrls: ["./product-navbar.component.css"],
})
export class ProductNavbarComponent implements OnInit {
  categories: String[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
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
}
