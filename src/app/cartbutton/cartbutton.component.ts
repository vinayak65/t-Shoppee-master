import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cartbutton',
  templateUrl: './cartbutton.component.html',
  styleUrls: ['./cartbutton.component.css'],
})
export class CartbuttonComponent implements OnInit {
  
  cartlist : any

  @Input() singleproduct;
  constructor(private cartservice : CartService) { }

  ngOnInit() {

    this.cartservice.cartobservable.subscribe(result=>{
        this.cartlist = result;
    })
  }
  
  addtocart(singleProduct : any){
    this.cartservice.addSelectedProduct(singleProduct);
  }

}
