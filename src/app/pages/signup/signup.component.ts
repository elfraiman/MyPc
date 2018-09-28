import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  public errorText: string;
  hide = true;
  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() { }

  doRegister() {
    this.auth.signupWithEmail(this.signupForm.get('email').value, this.signupForm.get('password').value);
  }
  getErrorMessage() {
    return this.signupForm.get('email').hasError('required')
      ? 'You must enter a value'
      : this.signupForm.get('email').hasError('email')
        ? 'Not a valid email'
        : '';
  }
}
