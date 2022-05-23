/** @format */

import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
const material = [
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class AppMaterialModule {}
