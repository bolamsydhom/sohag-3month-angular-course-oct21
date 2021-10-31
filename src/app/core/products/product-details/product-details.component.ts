import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  relatedProductArray: Product[] = [];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(
      this.activatedRoute.snapshot.data.pageName
    );
    
    const id = this.activatedRoute.params.subscribe(
      (res)=>{
        console.log(res.id);
        
        const product = this.productService.getProductById(+res.id);
        if (!product) {
          alert('Error Happened');
        } else {
          this.product = product;
          this.relatedProductArray = [];
          this.product.relatedProductsIds?.map((productId) => {
            const rProduct = this.productService.getProductById(productId);
            rProduct && this.relatedProductArray.push(rProduct);
          });
        }
      }
    );
  }
}
