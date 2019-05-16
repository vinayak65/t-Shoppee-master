import { Component, OnInit } from '@angular/core';
import { FeaturedProductService } from '../shared/featuredproduct.service';

@Component({
    selector: 'app-products',
    templateUrl: 'products.component.html',
    styleUrls:['products.component.css'],
    providers:[
        FeaturedProductService
    ],
})
export class ProductsComponent implements OnInit {

    productlist : any
    singleProduct : any
    constructor(private productservice:FeaturedProductService) { }

    ngOnInit() { 
        this.productservice.getAllProducts().subscribe(result=>{
            this.productlist = result;
        })
    }

}