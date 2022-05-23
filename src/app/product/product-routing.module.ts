/** @format */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "./product-main/product-add/product-add.component";
import { ProductListComponent } from "./product-main/product-list/product-list.component";
import { ProductViewComponent } from "./product-main/product-list/product-view/product-view.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProductMainRoutingModule {}
