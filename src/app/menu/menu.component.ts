import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/menu.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    providers:[
        MenuService
    ]
})
export class MenuComponent implements OnInit {
    myForm : FormGroup;
    menulist:string[];
    constructor(private menuservice:MenuService, private formBuilder: FormBuilder) { 
     this.myForm = this.formBuilder.group({
            
            search: ['', Validators.required]
        });

    }

    ngOnInit() {

        this.menulist = this.menuservice.getMenu()

    }
    get search() { return this.myForm.get('search'); }


}
