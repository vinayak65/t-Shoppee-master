import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from './user.service';


@Component({
    selector: 'app-user',
    templateUrl: "./user.component.html",
    providers:[
        UserService
    ]
})
export class UserComponent {

    users: User[] = []

    constructor(private userList:UserService) {
    }

    ngOnInit() { 
        this.users = this.userList.getUserList();
    }

    showDetails(user){

        alert('showing details of ' + user.userName );
    }

}