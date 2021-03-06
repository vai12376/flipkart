/** @format */

import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { isEmpty, Subscription } from "rxjs";
import { IProductData } from "src/app/common/models/interfaces";
import { ProductsService } from "src/app/common/services/product/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList: IProductData[] = [];
  showAddProductForm = false;
  showProductListTable = true;
  titleSearch: string = "";
  queryParamsSubs: Subscription;
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.queryParamsSubs = this.activatedRoute.queryParams.subscribe(
      (params) => {
        if (params["category"]) {
          this.productsService
            .getProductByCategory(params["category"])
            .subscribe({
              next: (res) => {
                this.productList = res;
              },
              error: (error) => {
                alert(error);
              },
            });
        } else {
          this.productsService.getAllProducts().subscribe({
            next: (res) => {
              this.productList = res;
            },
            error: (error) => {
              alert(error);
            },
          });
        }
      }
    );
  }

  ngOnDestroy() {
    this.queryParamsSubs.unsubscribe();
  }
}
