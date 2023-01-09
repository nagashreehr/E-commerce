import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FullLayoutComponent } from 'src/app/layouts/full-layout/full-layout.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: '', 
  component: FullLayoutComponent,
children:[
  {
    
    path:'',
    component: ProductsComponent
  },
  {
    path:'list-products',
    component:ListProductsComponent
  },
  {
    path:'add-products',
    component: AddProductComponent
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
