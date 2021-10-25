import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() arrayOfProducts!: Product[];
cartIsOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
