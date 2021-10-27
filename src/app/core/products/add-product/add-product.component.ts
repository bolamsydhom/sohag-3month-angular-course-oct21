import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category.mode';
import { PaymentType } from 'src/app/_models/payment-type.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
categories: Category[];
  constructor() {
    this.categories = [
      {id: 1, name:'Arts & Crafts'},
      {id: 2, name:'Automotive'},
      {id: 3, name:'Baby'},
      {id: 4, name:'Books'},
      {id: 5, name:'Eletronics'},
      {id: 6, name:'Women s Fashion'},
      {id: 7, name:'Men s Fashion'},
      {id: 8, name:'Health & Household'},
      {id: 9, name:'Home & Kitchen'},
      {id: 10, name:'Military Accessories'},
    ]
   }

  ngOnInit(): void {
  }

}
