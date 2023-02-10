import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { HomeModule } from './modules/home/home.module';
import { DetailsModule } from './modules/details/details.module';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { FavouriteModule } from './modules/favourite/favourite.module';
import { CartModule } from './modules/cart/cart.module';
import { ProductsModule } from './modules/products/products.module';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { HttpconfigInterceptor } from './modules/home/components/shared/interceptor/httpconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    HeaderComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HomeModule,
    DetailsModule,
    FavouriteModule,
    CartModule,
    ProductsModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpconfigInterceptor, multi: true }],

  bootstrap: [AppComponent],
})
export class AppModule { }
