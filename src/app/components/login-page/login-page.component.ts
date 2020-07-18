import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  strTitle: string;
  strHeading: string;
  loginForm: FormGroup;

  email() {
    return this.loginForm.get('email');
  }

  password() {
    return this.loginForm.get('password');
  }
  
  constructor( private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.strTitle = 'Welcome to Stack overflow Mockup';
    this.strHeading = 'The place where your query will come to an end';

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)\\.([a-zA-Z]{2,})$')]],
      password: ['', [Validators.required, Validators.minLength(6)] ],
      rememberMe: ['']
    });
  }

  loginUser() {
    if ( this.loginForm.valid ) {
      this.route.navigate(['/questions']);
    }
  }

}
