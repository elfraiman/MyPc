import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['']
  });

  public errorText: string;
  hide = true;
  protected user: Observable<firebase.User> = this._firebaseAuth.authState.pipe(filter(Boolean));
  constructor(private _firebaseAuth: AngularFireAuth, private fb: FormBuilder) {}

  ngOnInit() {}

  doRegister() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    console.log(this.signupForm.get('email').value, 'form value email');
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          res => {
            resolve(res);
            console.log(res, 'resolved');
          },
          err => {
            reject(err), (this.errorText = err);
          }
        );
    });
  }
  getErrorMessage() {
    return this.signupForm.get('email').hasError('required')
      ? 'You must enter a value'
      : this.signupForm.get('email').hasError('email')
        ? 'Not a valid email'
        : '';
  }
}
