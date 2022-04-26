/** @format */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductAddComponent } from "./product-add/product-add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductNavbarComponent } from "./product-navbar/product-navbar.component";
import { ProductMainComponent } from "./product-main.component";
import { ProductMainRoutingModule } from "./product-main-routing.module";
import { ProductViewComponent } from "./product-list/product-view/product-view.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  AuthInterceptor,
  ParamInterceptor,
} from "../common/service/interceptor.service";

@NgModule({
  declarations: [
    ProductAddComponent,
    ProductListComponent,
    ProductNavbarComponent,
    ProductMainComponent,
    ProductViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductMainRoutingModule,
  ],
  exports: [ProductMainComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class ProductMainModule {}
