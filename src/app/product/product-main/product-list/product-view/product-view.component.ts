/** @format */

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProductData } from "src/app/common/models/interfaces";
import { ProductsService } from "src/app/common/services/product/product.service";

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
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params["id"];
      console.log(this.productId);
    });
    this.productsService.getProductById(this.productId).subscribe({
      next: (res) => {
        this.productData = res;
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  onEdit(product: any) {
    this.router.navigate(["product", "add"], { state: { data: product } });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe({
      next: (res) => {
        alert("deleted succsesfully");
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
