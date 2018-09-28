import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email = new FormControl('', [Validators.required]);
  public password = new FormControl('', [Validators.required]);

  hide = true;

  protected userStatus: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }


  signInWithGoogle() {
  }

  signInWithEmail() {
    this.auth.signInWithEmail(this.email.value, this.password.value);
  }

  getErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
        ? 'Not a valid email'
        : '';
  }
}
