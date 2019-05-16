import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/loginindex'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthObject } from '../shared/authObject'
import { UserLoginService } from "../service/user-login.service";
import { ChallengeParameters, CognitoCallback, LoggedInCallback } from "../service/cognito.service";
import { DynamoDBService } from "../service/ddb.service";

@Component({
    selector: 'app-login',
    templateUrl: 'loginold.component.html'
})
export class LoginOldComponent implements CognitoCallback, LoggedInCallback,  OnInit {

    /* banners:string[] = ["../assets/images/hero-banner-1.jpg", "../assets/images/hero-banner.jpeg"] */
   authObject :  AuthObject;
   loading = false;
   returnUrl: string;
   authUsers: AuthObject [];
   submitted = false;
   loginForm : FormGroup;
   isValid = false;
 email: string;
    password2: string;
    errorMessage: string;
    mfaStep = false;
    mfaData = {
        destination: '',
        callback: null
    };


 isLoggedIn(message: string, isLoggedIn: boolean) {
        if (isLoggedIn) {
            this.router.navigate(['/securehome']);
        }
    }



    constructor( private formBuilder: FormBuilder,  public ddb: DynamoDBService, private authservice : AuthenticationService, private   route: ActivatedRoute,  public userService: UserLoginService,
        private router: Router) { }

   ngOnInit ()  {

     this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    this.authUsers =   this.authservice.authObject;
    this.returnUrl = "success";
   }
   get userName() { return this.loginForm.get('userName'); }

   get password() { return this.loginForm.get('password'); }


   // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }

   onLogin() {

      console.log("onlogin called here");
      this.email = this.loginForm.get('userName').value;
      this.password2 = this.loginForm.get('password').value;
        if (this.email == null || this.password2 == null) {
            this.errorMessage = "All fields are required";
            return;
        }
        this.errorMessage = null;
        this.userService.authenticate(this.email, this.password2, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage+" base error");
            if (this.errorMessage === 'User is not confirmed.') {
                console.log("redirecting");
                this.router.navigate(['/home/confirmRegistration', this.email]);
            } else if (this.errorMessage === 'User needs to set password.') {
                console.log("redirecting to set new password");
                this.router.navigate(['/home/newPassword']);
            }
        } else { //success
            this.ddb.writeLogEntry("login");
            this.router.navigate(['/securehome']);
        }
    }


  onSubmit() {
         this.submitted = true;
          console.log(" User Name "+ this.loginForm.get('userName'));
          console.log(" Password "+ this.loginForm.get('password'));
         // stop here if form is invalid
         if (this.loginForm.invalid) {
             return;
         }
        // console.log(" User Name "+ this.loginForm.get('userName'));

         this.loading = true;
         this.isValid = false;
         for (var _i = 0; _i <  this.authUsers.length; _i++) {
           var auth = this.authUsers[_i]
             console.log("auth "+auth.user);
                console.log("auth "+auth.password);
           if(this.f.userName.value ===auth.user && this.f.password.value === auth.password ){
               this.isValid = true;
             }
            console.log("User "+this.f.userName.value);
         }
        if (this.isValid){

             this.userService.authenticate(this.email, this.password.value(), this);

           this.router.navigate(['success']);

        /*
              ['success', 'bar-contents', 'baz-content', 'page'], {queryParams: this.params.queryParams, relativeTo: this.currentActivatedRoute}

        */
        }


     }
}
