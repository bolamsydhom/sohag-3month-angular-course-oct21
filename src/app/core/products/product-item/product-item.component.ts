import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
 @Input() product!: Product;
 @Output() itemAdded = new EventEmitter<Product>();


//  @ViewChild('inputNumber') inputElement !: ElementRef ;
// //  const inputElement = document.getElementById('inputNumber')
// //  inputElement.value
//  @ViewChild('divSale') divElement !: ElementRef ;

  constructor() {
  }

  ngOnInit(): void {

    
    // if(this.product.discount){

    // }else{
      // const h = document.getElementById('sale')
    //   document.getElementById('sale')?.style.display = 'none'
    // }
  }

  getPrice() {
    return this.product.discount
      ? this.product.price - this.product.discount
      : this.product.price;
  }

  itemAddedToCart(){
    // const message = `item ${this.product.name} has been added`
    // alert(message);
    // console.log(htmlEl);
    // htmlEl.value = this.product.price.toString();
    
    // // (this.inputElement.nativeElement as HTMLInputElement);
    
    // console.log('div', this.divElement);
    // console.log('input', this.inputElement.nativeElement);

    this.itemAdded.emit(this.product)
  }
}
