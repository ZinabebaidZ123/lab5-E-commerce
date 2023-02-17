import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 
  {path: "" , component :HomeComponent},
  {path: "productDetails/:id" , component :ProductDetailsComponent} ,
  {path: "logIn" , component : LogInComponent} ,
  {path: "register" , component : RegisterComponent} ,

  {path: "cart/:id" , component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
