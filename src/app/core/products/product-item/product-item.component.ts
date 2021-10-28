import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
 @Input() product!: Product;
//  @Output() itemAdded = new EventEmitter<Product>();


//  @ViewChild('inputNumber') inputElement !: ElementRef ;
// //  const inputElement = document.getElementById('inputNumber')
// //  inputElement.value
//  @ViewChild('divSale') divElement !: ElementRef ;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {

    
    // if(this.product.discount){

    // }else{
      // const h = document.getElementById('sale')
    //   document.getElementById('sale')?.style.display = 'none'
    // }
  }

  getPrice() {

    return this.product.price ? this.product.discount
      ? this.product.price - this.product.discount
      : this.product.price : 0;
  }

  itemAddedToCart(){
    // const message = `item ${this.product.name} has been added`
    // alert(message);
    // console.log(htmlEl);
    // htmlEl.value = this.product.price.toString();
    
    // // (this.inputElement.nativeElement as HTMLInputElement);
    
    // console.log('div', this.divElement);
    // console.log('input', this.inputElement.nativeElement);

    this.productService.itemAdded.emit(this.product);
    console.log('mmmmm');
    
  }
}
