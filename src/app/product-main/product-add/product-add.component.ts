/** @format */

import { R3Identifiers } from "@angular/compiler";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UUID } from "angular2-uuid";
import {
  debounceTime,
  filter,
  fromEvent,
  mergeMap,
  switchMap,
  throwError,
} from "rxjs";
import { IProductData } from "src/app/common/models/interfaces";
import { ProductsService } from "src/app/common/service/products.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit, AfterViewInit {
  productForm: FormGroup;
  formSubmited = false;
  categories: string[] = [];
  imageFile: File;
  imageUrl: string;
  editFlag = false;
  editDataId: number;
  @ViewChild("addProductBtn") addProductBtn: ElementRef;
  @Output() AddProductEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productForm = this.initializeForm();
  }
  ngAfterViewInit() {
    if (this.editFlag) {
      (this.addProductBtn.nativeElement as HTMLButtonElement).innerHTML =
        "Edit Product";
    }
  }
  ngOnInit() {
    if (history.state.data) {
      const editFormData: IProductData = history.state.data;
      this.editDataId = editFormData.id;
      this.productForm.patchValue({
        title: editFormData.title,
        price: editFormData.price,
        description: editFormData.description,
      });
      this.editFlag = true;
    }
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
      title: ["", [Validators.required, Validators.maxLength(256)]],
      category: ["", Validators.required],
      price: [null, [Validators.required]],
      image: ["", [Validators.required]],
      description: ["", [Validators.required, Validators.maxLength(512)]],
    });
    return productForm;
  }

  get _productForm() {
    return this.productForm.controls;
  }

  onFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files.length === 0) return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.imageFile = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageUrl = reader.result as string;
    };
  }
  onSubmit() {
    if (this.productForm.valid) {
      if (this.editFlag) {
        this.productsService
          .editProduct(this.editDataId, this.productForm.value)
          .subscribe(
            (res) => {
              console.log(res);
              alert("edited success fully");
              this.editFlag = false;
              this.router.navigate(["products", "list"]);
            },
            (error) => {
              alert(error);
            }
          );
      } else {
        this.productsService.addProduct(this.productForm.value).subscribe({
          next: (res) => {
            console.log(res);
            alert("data added successfully");
            this.router.navigate(["products", "list"]);
          },
          error: (error) => {
            alert(error);
          },
        });
      }
    }
  }
}
