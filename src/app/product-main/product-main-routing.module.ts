/** @format */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductViewComponent } from "./product-list/product-view/product-view.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "products/list",
    pathMatch: "full",
  },
  {
    path: "products/list/:id",
    component: ProductViewComponent,
  },
  {
    path: "products/list",
    component: ProductListComponent,
  },
  {
    path: "products",
    redirectTo: "products/list",
    pathMatch: "full",
  },
  {
    path: "products/add",
    component: ProductAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProductMainRoutingModule {}
