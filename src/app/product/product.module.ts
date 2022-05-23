/** @format */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductAddComponent } from "./product-main/product-add/product-add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductListComponent } from "./product-main/product-list/product-list.component";
import { ProductNavbarComponent } from "./product-main/product-navbar/product-navbar.component";
import { ProductMainComponent } from "./product-main/product-main.component";
import { ProductMainRoutingModule } from "./product-routing.module";
import { ProductViewComponent } from "./product-main/product-list/product-view/product-view.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../common/services/interceptor/auth-interceptor.service";
import { HttpErrorHandlingInterceptor } from "../common/services/interceptor/http-error-handling-interceptor.service";
import { ParamInterceptor } from "../common/services/interceptor/params-interceptor.service";

import { FiltersearchPipe } from "../common/pipes/filtersearch.pipe";
import { AppMaterialModule } from "../app-material/app-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    ProductAddComponent,
    ProductListComponent,
    ProductNavbarComponent,
    ProductMainComponent,
    ProductViewComponent,
    FiltersearchPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductMainRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorHandlingInterceptor,
      multi: true,
    },
  ],
})
export class ProductModule {}
