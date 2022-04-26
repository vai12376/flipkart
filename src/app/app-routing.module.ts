/** @format */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./product-main/product-list/product-list.component";
import { ProductMainComponent } from "./product-main/product-main.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
