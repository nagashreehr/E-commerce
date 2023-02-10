import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FullLayoutComponent } from 'src/app/layouts/full-layout/full-layout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {

        path: '',
        component: ProductsComponent
      },
      {
        path: '',
        component: ListProductsComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'add-product/:id',
        component: AddProductComponent
      },
      {
        path: 'delete-products',
        component: DeleteProductComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
