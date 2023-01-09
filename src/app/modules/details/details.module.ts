import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials/materials.module';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MaterialsModule
  ]
})
export class DetailsModule { }
