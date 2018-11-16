import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { filter, map } from '../../../node_modules/rxjs/operators';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public user = this.authUser.user.pipe(
    filter(user => !isNullOrUndefined(user)),
    map(user => user)
  );

  constructor(public authUser: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.authUser.signOut();
    this.router.navigate(['home']);
  }


}
