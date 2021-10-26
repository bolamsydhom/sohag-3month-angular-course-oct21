import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../_models/product.model';

@Injectable({
    providedIn: 'root'
  })
  
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Camera',
      price: 100,
      discount: 50,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 2,
      name: 'Photo Camera',
      price: 300,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 3,
      name: 'Laptop',
      price: 1000,
      discount: 50,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 4,
      name: 'Mobile',
      price: 3000,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 5,
      name: 'Printer',
      price: 10000,
      discount: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 6,
      name: 'Scanner',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 7,
      name: 'Iphone',
      price: 30000,
      discount: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 8,
      name: 'Camera2',
      price: 1000,
      discount: 50,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 9,
      name: 'Camera3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 10,
      name: 'Camera3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 11,
      name: 'Camera34',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 12,
      name: 'Camera35',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 13,
      name: 'Camera36',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 14,
      name: 'Camera73',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 15,
      name: 'Camera37',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 16,
      name: 'Camera83',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 17,
      name: 'Camera39',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 18,
      name: 'Camera312',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 19,
      name: 'Camera322',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 20,
      name: 'Camera3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 21,
      name: 'Camer22a3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 22,
      name: 'Camera23',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 23,
      name: 'Camera3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 24,
      name: 'Camera23',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 25,
      name: 'Camera23',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 26,
      name: 'Came2ra3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 27,
      name: 'Cam2era3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 28,
      name: 'Came22ra3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 29,
      name: 'Came2ra63',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 30,
      name: 'Came2r5a3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 31,
      name: 'Came24ra3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
    {
      id: 32,
      name: 'Came2r1a3',
      price: 500,
      imgUrl: 'assets/img/layout-styles.png',
    },
  ];

  public itemAdded = new EventEmitter<Product>();

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): Product[] {
    this.products.push(product);
    return [...this.products];
  }

  updateProduct(product: Product): Product[] {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
    return [...this.products];
  }

  deleteProduct(id: number): Product[] {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
    return [...this.products];
  }
}
