import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/category.mode';
import { PaymentType } from 'src/app/_models/payment-type.model';
import { Product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  categories!: Category[];
  paymentTypeMethods!: PaymentType[];
  product = <Product>{};
  isEditMode = false;

  @ViewChild('myForm') form!: ElementRef;

  constructor(
    private categoryService: CategoryService,
    private paymentTypeService: PaymentTypeService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.product = {
      data: [{}],
      paymentTypeMethods: [],
      tags: [],
      imagesUrls: [],
    };
  }

  ngOnInit(): void {
   this.categoryService.getAllCategories().subscribe(
      (res)=>{
        console.log(res);
        this.categories = res as Category[];
      }
    );
    this.paymentTypeMethods = this.paymentTypeService.getAllPaymentTypes();

    const productId = this.activatedRoute.snapshot.params.productId;

    if (productId) {
      const product = this.productService.getProductById(+productId);
      // this.product = { ...product };
      // this.isEditMode = true;
    }
  }

  onSubmit(form: NgForm, txtInput: NgModel) {
    // const cat = this.categoryService.getCategoryById(+form.value.category);
    // if (cat) {
    //   this.product.category = cat;
    // }

    this.product.paymentTypeMethods = [];
    for (let index = 0; index < this.paymentTypeMethods.length; index++) {
      if (form.value['check_' + index]) {
        this.product.paymentTypeMethods.push(this.paymentTypeMethods[index]);
      }
    }

    if(this.isEditMode){
      this.productService.updateProduct(this.product);
    }else{
      this.productService.addProduct(this.product).subscribe(
        (res)=>{console.log(res);
        }
      );
    }

    // route to product listing
    this.router.navigateByUrl('home');
    console.log(this.product);
    console.log(form);
    console.log('textInput', txtInput);
  }
  onTagAdded(tagInput: HTMLInputElement) {
   if(!this.product.tags){
     this.product.tags = [];
   }
    this.product.tags?.push({ name: tagInput.value });
    tagInput.value = '';
  }
}
