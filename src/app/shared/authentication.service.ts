import { Injectable , OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AuthObject } from '../shared/authObject'


@Injectable()
export class AuthenticationService   {

    authList : any[] = []
    authSubject : Subject<any> = new Subject<any>()
    authobservable = this.authSubject.asObservable()
   //  var User =  function(name , pass) { this.user='tejas', this.password=pass}() ;
    /* authObject : { user: string, password: string } [] =
     [ {"user":"tejas", "password":"tejas"},{"user":"dinesh", "password":"dinesh"} ];
    */
    authObject : AuthObject [] = [ new AuthObject(  123, 'clear@gma.com', 'teja','teja'),new AuthObject(  124, 'cdfar@gma.com', 'dear','dear') ];


    constructor() {
      for (let auth in this.authObject ) {
        this.authList.push(auth);
      }
     }


    getAuthList() {
        return this.authList;
    }


}
