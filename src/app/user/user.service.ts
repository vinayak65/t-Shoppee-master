import { Injectable } from '@angular/core';
import { User } from '../user.model';

@Injectable()
export class UserService{
    userList : User[];
    constructor(){
        
        this.userList.push(new User(1, 'ramesh@gmail.com', 'Ramesh', "http://lorempixel.com/400/300/sports", true));
        this.userList.push(new User(2, 'suresh@gmail.com', 'Suresh', "http://lorempixel.com/400/300/people", false));
        this.userList.push(new User(3, 'rajesh@gmail.com', 'Rajesh', "http://lorempixel.com/400/300/transport", true));
        this.userList.push(new User(4, 'kamal@gmail.com', 'Kamal', "http://lorempixel.com/400/300/", false));
    }

    getUserList(){
        return this.userList
    }
}