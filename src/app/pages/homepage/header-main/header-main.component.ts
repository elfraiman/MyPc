import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

  protected user: Observable<firebase.User> = this._firebaseAuth.authState.pipe(
    filter(Boolean)
  );

  constructor(private _firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
  }

}
