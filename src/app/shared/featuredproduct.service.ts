import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FeaturedProductService {
    
    constructor(private httpclient:HttpClient) { }

    getFeaturedProducts():Observable<any>{
        return this.httpclient.get('https://jsonplaceholder.typicode.com/photos/?_limit=4');
    }

    getAllProducts():Observable<any>{
        return this.httpclient.get('https://jsonplaceholder.typicode.com/photos/?_limit=30');
    }

    getSingleProduct(id:number):Observable<any>{
        return this.httpclient.get('https://jsonplaceholder.typicode.com/photos/?id='+id);
    }

}