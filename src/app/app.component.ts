import { Component } from '@angular/core';
import { Product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  productArray: Product[] = [];

  // exampleProducts = 
  title = 'sohag-angular-course';

  // outputItemAdded(product: Product) {
  //   console.log(product);
  //   this.productArray.push(product);
  // }
}
