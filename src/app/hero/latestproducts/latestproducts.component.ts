import { Component, OnInit } from '@angular/core';
import { FeaturedProductService } from '../../shared/featuredproduct.service';

@Component({
    selector: 'app-latest',
    templateUrl: 'latestproduct.component.html',
    providers:[
        FeaturedProductService
    ]
})
export class LatestProductComponent implements OnInit {

    featuredproducts :any
    constructor(private featuredservice:FeaturedProductService) { 

    }

    ngOnInit() { 
        
        this.featuredservice.getFeaturedProducts().subscribe(result=>{
            this.featuredproducts = result;
        });
    }

}