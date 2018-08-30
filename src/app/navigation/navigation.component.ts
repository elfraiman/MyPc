import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from '../../../node_modules/rxjs';
import { filter } from '../../../node_modules/rxjs/operators';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  protected user: Observable<firebase.User> = this._firebaseAuth.authState.pipe(
    filter(Boolean)
  );

  constructor(
    private _firebaseAuth: AngularFireAuth,
    private authUser: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['']));
      console.log('log out', this.user);
  }
}
