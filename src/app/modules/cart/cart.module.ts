import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialsModule
  ]
})
export class CartModule { }
