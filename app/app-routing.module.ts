import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'order',component:OrderComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
