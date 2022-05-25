/** @format */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartMainComponent } from "./cart/cart-main/cart-main.component";
import { AuthGuard } from "./common/guards/auth.guard";
import { LoginComponent } from "./login/login.component";
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
        canActivate: [AuthGuard],
        data: {
          role: "User",
        },
      },
      {
        path: "list/:id",
        component: ProductViewComponent,
        canActivate: [AuthGuard],
        data: {
          role: "User",
        },
      },
      {
        path: "add",
        component: ProductAddComponent,
        canActivate: [AuthGuard],
        data: {
          role: "Admin",
        },
      },
    ],
  },

  {
    path: "cart",
    component: CartMainComponent,
    canActivate: [AuthGuard],
    data: {
      role: "User",
    },
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
