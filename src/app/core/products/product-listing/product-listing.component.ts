import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
productListArray: Product[];
@Output() outputItem = new EventEmitter<Product>();

  constructor() {
    this.productListArray = [
      {name: 'Camera', price: 100, discount:50 , imgUrl:'assets/img/layout-styles.png'},
      {name: 'Photo Camera', price: 300 , imgUrl:'assets/img/layout-styles.png'},
      {name: 'Laptop', price: 1000, discount:50 , imgUrl:'assets/img/layout-styles.png'},
      {name: 'Mobile', price: 3000, imgUrl:'assets/img/layout-styles.png'},
      {name: 'Printer', price: 10000, discount:500 , imgUrl:'assets/img/layout-styles.png'},
      {name: 'Scanner', price: 500, imgUrl:'assets/img/layout-styles.png'},
      {name: 'Iphone', price: 30000, discount:500 , imgUrl:'assets/img/layout-styles.png'},
      {name: 'Camera2', price: 1000, discount:50 , imgUrl:'assets/img/layout-styles.png'},
      {name: 'Camera3', price: 500 , imgUrl:'assets/img/layout-styles.png'},
      
    ]
   }

  ngOnInit(): void {
  }

  newItemAdded(product: Product){
  console.log(product);
  this.outputItem.emit(product);

  }

}
