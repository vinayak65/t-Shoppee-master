import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { HeroComponent } from '../hero/hero.component';
import { ProductDetailsComponent } from '../products/productdetails/productdetails.component';
import { LoginOldComponent } from '../login/loginold.component';
import { SuccessComponent } from '../success/success.component';
import { ContactComponent } from '../components/contact/contact.component';


var routes : Routes = [

    {
      path : '',
      component : HeroComponent
    },
    {
      path : 'home',
      component : HeroComponent
    },
    {
      path : 'products/productdetails/:id',
      component : ProductDetailsComponent
    },
    {
      path : 'products',
      component : ProductsComponent
    }
    ,
    {
      path : 'login',
      component : LoginOldComponent
    }
    ,
    {
      path : 'success',
      component : SuccessComponent
    }
    ,
    {
      path : 'contact',
      component : ContactComponent
    }
    ,
    {
      path : 'aboutus',
      component : AboutUsComponent
    }
]
@NgModule({
  exports : [ RouterModule ],
  imports : [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
