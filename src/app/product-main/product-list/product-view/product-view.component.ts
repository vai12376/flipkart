/** @format */

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProductData } from "src/app/common/interfaces";
import { ProductsService } from "src/app/common/service/products.service";

@Component({
  selector: "app-product-view",
  templateUrl: "./product-view.component.html",
  styleUrls: ["./product-view.component.css"],
})
export class ProductViewComponent implements OnInit {
  productId!: number;
  productData!: IProductData;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params["id"];
      console.log(this.productId);
    });
    this.productService.getProductById(this.productId).subscribe({
      next: (res) => {
        this.productData = res;
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
