import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeaturedProductService } from '../../shared/featuredproduct.service';

@Component({
    selector: 'app-productdetails',
    templateUrl: 'productdetails.component.html',
    providers:[
        FeaturedProductService
    ]
})
export class ProductDetailsComponent implements OnInit {

    prodId:number
    singleproduct:any

    constructor(private route: ActivatedRoute, private productservice:FeaturedProductService) { }

    ngOnInit() { 

        this.route.params.subscribe(p => {

            this.prodId = parseInt(p['id']);

        })

        this.productservice.getSingleProduct(this.prodId).subscribe(result =>{
            this.singleproduct = result;
            console.log(this.singleproduct);
        })
    }

}