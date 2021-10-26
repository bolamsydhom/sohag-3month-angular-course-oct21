import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example-component/example-component.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductListingComponent } from './core/products/product-listing/product-listing.component';
import { ProductItemComponent } from './core/products/product-item/product-item.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductService } from './_services/productService.service';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HeaderComponent,
    ProductListingComponent,
    ProductItemComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
