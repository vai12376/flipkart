/** @format */

import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatBadgeModule } from "@angular/material/badge";
const material = [
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatBadgeModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class AppMaterialModule {}
