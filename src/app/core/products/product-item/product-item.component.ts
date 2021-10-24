import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
 @Input() product!: Product;

  constructor() {
  }

  ngOnInit(): void {
    // if(this.product.discount){

    // }else{
    //   document.getElementById('sale')?.style.display = 'none'
    // }
  }

  getPrice() {
    return this.product.discount
      ? this.product.price - this.product.discount
      : this.product.price;
  }
}
