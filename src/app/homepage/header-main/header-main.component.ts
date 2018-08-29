import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { filter } from '../../../../node_modules/rxjs/operators';
import * as firebase from 'firebase';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';
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
