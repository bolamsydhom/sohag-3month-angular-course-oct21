import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
  animations:[]
})
export class ProductListingComponent implements OnInit {
  @Input() productListArray!: Product[];
  @Input() numberOfItemsPerPage: number = 9;
 

  noOfPagesArray: number[] = [];
  productsArrayToBeViewed: Product[] = [];
  currentPage: number = 0;
  

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
   this.productService.getAllProducts().subscribe(
     (res)=>{
       console.log(res);
       this.productListArray = res.product
       this.sliceArray();
       this.calculatePageNumbers();
     }
   );
 
    this.productService.productsChanged.subscribe(
      (res) => {
        console.log('product list', res);
        
        this.productListArray = res;
        this.sliceArray();
        this.calculatePageNumbers();
      }
    );

  console.log(this.productListArray);
  

   

    // array.slice(currentPage * numberOfItemsPerPage , (currentPage * numberOfItemsPerPage)+numberOfItemsPerPage)
  }

  calculatePageNumbers(){
    const numberOfPages = Math.ceil(
      this.productListArray.length / this.numberOfItemsPerPage
    );

    for (let index = 0; index < numberOfPages; index++) {
      this.noOfPagesArray.push(index + 1);
    }

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
