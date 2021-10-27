import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
 arrayOfProducts: Product[] = [];
id = 1;
  constructor(private productService: ProductService) { 
  }
// Dependency Injection 

  ngOnInit(): void {
    this.productService.itemAdded.subscribe(
      (next)=>{
        this.arrayOfProducts.push(next)
        console.log(next);
        
      },
      (error)=>{

      },
      ()=>{

      }
    )
  }

}
