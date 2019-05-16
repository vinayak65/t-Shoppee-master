import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {

    banners:string[] = ["../assets/images/hero-banner-1.jpg", "../assets/images/hero-banner.jpeg"]

    constructor() { }

    ngOnInit() { 

    }

}