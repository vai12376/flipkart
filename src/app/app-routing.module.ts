/** @format */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartMainComponent } from "./cart/cart-main/cart-main.component";
import { ProductAddComponent } from "./product/product-main/product-add/product-add.component";
import { ProductListComponent } from "./product/product-main/product-list/product-list.component";
import { ProductViewComponent } from "./product/product-main/product-list/product-view/product-view.component";
import { ProductMainComponent } from "./product/product-main/product-main.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "product/list",
    pathMatch: "full",
  },
  {
    path: "product",
    component: ProductMainComponent,
    children: [
      {
        path: "list",
        component: ProductListComponent,
      },
      {
        path: "list/:id",
        component: ProductViewComponent,
      },
      {
        path: "add",
        component: ProductAddComponent,
      },
    ],
  },
  {
    path: "cart",
    component: CartMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
