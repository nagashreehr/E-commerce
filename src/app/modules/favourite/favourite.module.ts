import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials/materials.module';

import { FavouriteRoutingModule } from './favourite-routing.module';
import { FavouriteComponent } from './favourite.component';


@NgModule({
  declarations: [
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    FavouriteRoutingModule,
    MaterialsModule
  ]
})
export class FavouriteModule { }
