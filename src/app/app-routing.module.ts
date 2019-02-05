import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CompareComponent } from './compare/compare.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:'signin', component: SigninComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path: 'compare', component: CompareComponent },
  {path: 'home', component: HomeComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
