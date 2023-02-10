import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, 
  { path: 'details', loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule) },
  { path: 'favourite', loadChildren: () => import('./modules/favourite/favourite.module').then(m => m.FavouriteModule) },
  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'signUp', loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule) },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
