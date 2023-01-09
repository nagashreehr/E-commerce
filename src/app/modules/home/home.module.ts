import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialsModule } from 'src/app/materials/materials.module';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialsModule
  ]
})
export class HomeModule { }
