
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CompareComponent } from './compare/compare.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ProductsComponent,
    CartComponent,
    CompareComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent,SigninComponent,ProductsComponent,CartComponent,CompareComponent,HomeComponent]
  
})
export class AppModule { }
