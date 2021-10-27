import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './core/products/add-product/add-product.component';
import { ProductListingComponent } from './core/products/product-listing/product-listing.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {path:'', component: ProductListingComponent},
  {path:'home', redirectTo: '', pathMatch: 'full'},
  {path:'add-product', component: AddProductComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
