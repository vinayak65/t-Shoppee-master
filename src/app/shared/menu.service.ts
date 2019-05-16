import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    mainmenu = ["Home", "For Him", "For Her", "About us", "Contact", "Login"]
    constructor() { }
 
    getMenu():string[]{
        return this.mainmenu;
    }

}
