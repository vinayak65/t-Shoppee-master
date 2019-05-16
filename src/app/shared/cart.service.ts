import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CartService {
    cartList : any[] = []
    cartsubject : Subject<any> = new Subject<any>()
    cartobservable = this.cartsubject.asObservable()
    constructor() { }

    addSelectedProduct(product:any){
        this.cartList.push(product);
        this.cartsubject.next(this.cartList);
    }

    getCartList(){
        return this.cartList;
    }

}