/** @format */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartMainComponent } from "./cart-main/cart-main.component";
import { AppMaterialModule } from "../app-material/app-material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CartMainComponent],
  imports: [CommonModule, AppMaterialModule, RouterModule],
})
export class CartModule {}
