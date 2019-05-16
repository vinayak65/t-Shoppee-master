import { OnInit } from '@angular/core';
import { Button } from 'aws-sdk/clients/lexruntime';
import {Component} from "@angular/core";
/*
https://www.base64-image.de/
*/
@Component({
  selector  : "aboutus",
  templateUrl : "./aboutus.html"

})
export class AboutUsComponent implements OnInit {

   companyName: string;
   logo: string;
   clickOk: Button;
   disclaimerText : string;

   constructor() {

   }
   ngOnInit() {

         this.companyName = 'Comptrail';
         this.logo = '../../assets/images/companylogo.png';
         this.disclaimerText = "welcome to a discrete and niche company";

  }
}
