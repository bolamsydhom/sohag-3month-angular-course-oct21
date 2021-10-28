import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Category } from 'src/app/_models/category.mode';
import { PaymentType } from 'src/app/_models/payment-type.model';
import { Product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  categories!: Category[];
  paymentTypeMethods!: PaymentType[];
  product = <Product>{};

  @ViewChild('myForm') form!: ElementRef;

  constructor(
    private categoryService: CategoryService,
    private paymentTypeService: PaymentTypeService
  ) {

     this.product =  {
      basicData: [
        {},
      ],
      paymentTypeMethods: [],
      tags: [],
      imgUrls: []
    }
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getAllCategories();
    this.paymentTypeMethods = this.paymentTypeService.getAllPaymentTypes();
  }

  onSubmit(form: NgForm, txtInput: NgModel) {
    const cat = this.categoryService.getCategoryById(+form.value.category);
    if(cat){
      this.product.category = cat;
    }

    this.product.paymentTypeMethods = [];
    for (let index = 0; index < this.paymentTypeMethods.length; index++) {
  
     if( form.value['check_'+index]){
       this.product.paymentTypeMethods.push(this.paymentTypeMethods[index]);
     }
      
    }
    console.log(this.product);
    console.log(form);
    console.log('textInput',txtInput);
    
  }
 onTagAdded(tagInput: HTMLInputElement){
  this.product.tags?.push({name: tagInput.value});
  tagInput.value = '';
 }
}
