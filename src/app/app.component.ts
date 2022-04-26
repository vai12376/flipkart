/** @format */

import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnInit,
} from "@angular/core";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "flipkart";
  constructor(private ngxUiLoaderService: NgxUiLoaderService) {}
  ngOnInit() {}
}
