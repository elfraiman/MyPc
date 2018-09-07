import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { Observable } from '../../../node_modules/rxjs';
import { filter } from '../../../node_modules/rxjs/operators';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  protected user: Observable<firebase.User> = this._firebaseAuth.authState.pipe(filter(Boolean));

  constructor(private _firebaseAuth: AngularFireAuth, private authUser: AuthService, private router: Router) {}

  ngOnInit() {}
}
