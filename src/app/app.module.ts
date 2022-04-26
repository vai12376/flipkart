/** @format */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductMainModule } from "./product-main/product-main.module";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductMainModule,
    NgxUiLoaderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
