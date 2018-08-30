import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { filter } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  protected user: Observable<firebase.User> = this._firebaseAuth.authState.pipe(
    filter(Boolean)
  );

  protected userStatus: boolean;

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private authUser: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    console.log(this.authUser.isLoggedIn(), ' is logged in');
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then( promise => {
      console.log('login succesful', promise);
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
