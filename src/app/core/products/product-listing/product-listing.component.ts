import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  @Input() productListArray!: Product[];
  @Input() numberOfItemsPerPage!: number;
 

  noOfPagesArray: number[] = [];
  productsArrayToBeViewed: Product[] = [];
  currentPage: number = 0;
  productService = new ProductService;

  constructor() {

  }

  ngOnInit(): void {
    this.productListArray = this.productService.getAllProducts();
  

    const numberOfPages = Math.ceil(
      this.productListArray.length / this.numberOfItemsPerPage
    );

    for (let index = 0; index < numberOfPages; index++) {
      this.noOfPagesArray.push(index + 1);
    }

    this.sliceArray();

    // array.slice(currentPage * numberOfItemsPerPage , (currentPage * numberOfItemsPerPage)+numberOfItemsPerPage)
  }

  newItemAdded(product: Product) {
    console.log(product);
    
  }

  sliceArray() {
    this.productsArrayToBeViewed = this.productListArray.slice(
      this.currentPage * this.numberOfItemsPerPage,
      this.currentPage * this.numberOfItemsPerPage + this.numberOfItemsPerPage
    );
  }

  onPagination(i: number) {
    if (i > -1 && i < this.noOfPagesArray.length) {
      this.currentPage = i;
      this.sliceArray();
    }
  }
}
