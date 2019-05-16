import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  AuthenticationService } from '../../shared/loginindex'
import { Router, ActivatedRoute } from '@angular/router';
import { AuthObject } from '../../shared/authObject'
//import { Overlay, overlayConfigFactory } from 'angular2-modal';
//import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'  ,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   name;
  email;
  message;
  contactForm : FormGroup;


  constructor( private formBuilder: FormBuilder,private authservice : AuthenticationService, private   route: ActivatedRoute,
        private router: Router) { }

  ngOnInit() {

 this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            message: ['', Validators.required]
        });


  }
  //get name() { return }




  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {

    this.name  = this.contactForm.get("name");
    this.email = this.contactForm.get("email");
    this.message = this.contactForm.get("message");


    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }

  /*

  C:\ngBuild\t-Shoppee-master>npm install aws-sdk
npm WARN bootstrap@4.3.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.3.1 requires a peer of popper.js@^1.14.7 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ aws-sdk@2.449.0
added 7 packages from 10 contributors and audited 42627 packages in 43.835s
found 5 high severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details




  */



}
