/** @format */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartMainComponent } from "./cart-main/cart-main.component";
import { AppMaterialModule } from "../app-material/app-material.module";

@NgModule({
  declarations: [CartMainComponent],
  imports: [CommonModule, AppMaterialModule],
})
export class CartModule {}
