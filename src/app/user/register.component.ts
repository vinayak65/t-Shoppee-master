import { Component } from '@angular/core';


import { AuthenticationService } from '../shared/loginindex';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthObject } from '../shared/authObject'


@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        //private userService: UserService,
        private authService: AuthenticationService) {}
    register() {
        this.loading = true;
       /* this.authService.create(this.model)
            .subscribe(
                data => {
                    this.authService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.authService.error(error);
                    this.loading = false;
                });*/
    }
}
