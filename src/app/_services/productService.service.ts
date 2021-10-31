import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Product } from '../_models/product.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products!: Product[];
  // private products: Product[] = [
  //   {
  //     id: 1,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera',
  //         desc: 'This is camera',
  //         lang: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'Visa' }],
  //     price: 100,
  //     discount: 50,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductsIds: [2,3,4,5]
  //   },
  //   {
  //     id: 2,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera 2',
  //         desc: 'This is camera',
  //         lang: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'Visa' }],
  //     price: 100,
  //     discount: 50,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductsIds: [1,3,4,5]

  //   },
  //   {
  //     id: 3,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera 3',
  //         desc: 'This is camera',
  //         lang: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'Visa' }],
  //     price: 100,
  //     discount: 50,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductsIds: [1,6,4,5]

  //   },
  //   {
  //     id: 4,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera 4',
  //         desc: 'This is camera',
  //         lang: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'Visa' }],
  //     price: 100,
  //     discount: 50,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductsIds: [1,3,7,5]

  //   },
  //   {
  //     id: 5,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera 5',
  //         desc: 'This is camera',
  //         lang: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'Visa' }],
  //     price: 100,
  //     discount: 50,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductsIds: [1,3,4,8]

  //   },
  //   {
  //     id: 6,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera 6',
  //         desc: 'This is camera',
  //         lang: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'Visa' }],
  //     price: 100,
  //     discount: 50,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductsIds: [7,3,4,5]

  //   },
  //   {
  //     id: 7,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera 7',
  //         desc: 'This is camera',
  //         lang: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'Visa' }],
  //     price: 100,
  //     discount: 50,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductsIds: [1,9,4,5]

  //   },
  //   {
  //     id: 8,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera 8',
  //         desc: 'This is camera',
  //         lang: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'Visa' }],
  //     price: 100,
  //     discount: 50,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductsIds: [1,3,4,5]

  //   },
  //   {
  //     id: 9,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera 9',
  //         desc: 'This is camera',
  //         lang: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts' },
  //     paymentTypeMethods: [{ id: 1, name: 'Visa' }],
  //     price: 100,
  //     discount: 50,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductsIds: [1,3,4,5]

  //   },

  // ];

  url = environment.baseUrl;

  public itemAdded = new EventEmitter<Product>();
  public productsChanged = new EventEmitter<Product[]>();

  constructor(private http: HttpClient){}

  getAllProducts(): Observable<{product: Product[]}> {
    return this.http.get<{product: Product[]}>(`${this.url}product`);
    
    // this.productsChanged.emit(this.products);
    // return [...this.products];
    // return this.productsChanged;

  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.url}product/add`, product)
    // this.products.push(product);
    // this.productsChanged.emit([...this.products]);
    // return [...this.products];
  }

  updateProduct(product: Product): Product[] {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
    this.productsChanged.emit([...this.products]);
    return [...this.products];
  }

  deleteProduct(id: number): Product[] {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
    this.productsChanged.emit([...this.products]);
    return [...this.products];
  }
}
