import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html'

})
export class CartComponent implements OnInit {
    
    cartProducts : any = []
    constructor(private cartservice : CartService) { 
    }
    
    ngOnInit() {
        this.cartservice.cartobservable.subscribe(result => {
            this.cartProducts = result
        })
    }

    // updateCart(){   
    //     this.cartProducts = this.cartservice.getCartList();
    //     console.log(this.cartProducts);
    // }

}