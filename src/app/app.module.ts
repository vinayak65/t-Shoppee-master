import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { LatestProductComponent } from './hero/latestproducts/latestproducts.component';
import { TrimStringPipe } from './shared/trim.pipe';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductDetailsComponent } from './products/productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { CartbuttonComponent } from './cartbutton/cartbutton.component';
import { CartService } from './shared/cart.service';
import { MenuService } from './shared/menu.service';
import { AuthenticationService } from './shared/authentication.service';
import { LoginOldComponent } from './login/loginold.component';
import { SuccessComponent } from './success/success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { SampleFakeInterceptor } from './httpinterceptor/SampleFakeInterceptor';

//aws 
import {UserRegistrationService} from "./service/user-registration.service";
import {UserParametersService} from "./service/user-parameters.service";
import {UserLoginService} from "./service/user-login.service";
import {CognitoUtil} from "./service/cognito.service";
import {routing} from "./app.routes";
import {AboutComponent, HomeComponent, HomeLandingComponent} from "./public/home.component";
import {AwsUtil} from "./service/aws.service";
import {UseractivityComponent} from "./secure/useractivity/useractivity.component";
import {MyProfileComponent} from "./secure/profile/myprofile.component";
import {SecureHomeComponent} from "./secure/landing/securehome.component";
import {JwtComponent} from "./secure/jwttokens/jwt.component";
import {DynamoDBService} from "./service/ddb.service";
import {LoginComponent} from "./public/auth/login/login.component";
import {RegisterComponent} from "./public/auth/register/registration.component";
import {ForgotPassword2Component, ForgotPasswordStep1Component} from "./public/auth/forgot/forgotPassword.component";
import {LogoutComponent, RegistrationConfirmationComponent} from "./public/auth/confirm/confirmRegistration.component";
import {ResendCodeComponent} from "./public/auth/resend/resendCode.component";
import {NewPasswordComponent} from "./public/auth/newpassword/newpassword.component";
import { MFAComponent } from './public/auth/mfa/mfa.component';

//aws



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent,
    HeroComponent,
    LatestProductComponent,
    TrimStringPipe,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    CartbuttonComponent,
    LoginOldComponent,
    SuccessComponent,
    ContactComponent,
    //aws
       NewPasswordComponent,
        LoginComponent,
        LogoutComponent,
        RegistrationConfirmationComponent,
        ResendCodeComponent,
        ForgotPasswordStep1Component,
        ForgotPassword2Component,
        RegisterComponent,
        MFAComponent,
        AboutComponent,
        HomeLandingComponent,
        HomeComponent,
        UseractivityComponent,
        MyProfileComponent,
        SecureHomeComponent,
        JwtComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
      routing
  ],
  bootstrap: [AppComponent],
  providers:[
    CartService,
    MenuService,
    AuthenticationService, 
    SampleFakeInterceptor,
    CognitoUtil,
        AwsUtil,
        DynamoDBService,
        UserRegistrationService,
        UserLoginService,
        UserParametersService
  ]
})
export class AppModule { }
