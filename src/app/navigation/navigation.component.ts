import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { filter, map, take } from '../../../node_modules/rxjs/operators';
import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public user$ = this.afAuth.authState.pipe(
    filter(val => !isNullOrUndefined(val)),
    map(val => val.email)
  );
    constructor(public authUser: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

 ngOnInit() {
  }

  signOut() {
    this.authUser.signOut();
    this.router.navigate(['home']);
  }


}
