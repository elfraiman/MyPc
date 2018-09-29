import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public email = new FormControl('', [Validators.required]);
  public password = new FormControl('', [Validators.required]);


  public errorText: string;
  hide = true;
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() { }

  doRegister() {
    this.auth.signupWithEmail(this.email.value, this.password.value);
  }

  doGoogleRegister() {
    this.auth.googleLogin().then(promise => {
      this.router.navigate(['home']);
    });
  }

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
        ? 'Not a valid email'
        : '';
  }
}
