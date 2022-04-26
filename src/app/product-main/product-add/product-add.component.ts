/** @format */

import { Template } from "@angular/compiler/src/render3/r3_ast";
import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UUID } from "angular2-uuid";
import {
  debounceTime,
  filter,
  fromEvent,
  mergeMap,
  switchMap,
  throwError,
} from "rxjs";
import { IProductData } from "src/app/common/interfaces";
import { ProductsService } from "src/app/common/service/products.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {
  productForm;
  formSubmited = false;
  categories: string[] = [];
  @Output() AddProductEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {
    this.productForm = this.initializeForm();
  }
  ngOnInit() {
    this.productsService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  initializeForm() {
    let productForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(256)]],
      category: ["", Validators.required],
      rate: ["", [Validators.required, Validators.min(1)]],
      quantity: [null, [Validators.required]],
      color: ["", Validators.required],
      description: ["", [Validators.required, Validators.maxLength(512)]],
    });
    return productForm;
  }

  get _productForm() {
    return this.productForm.controls;
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.productsService.addProduct(this.productForm.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error) => {
          alert(error);
        },
      });
    }
  }
}
