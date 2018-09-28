import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from '../../../node_modules/rxjs';
import { filter } from '../../../node_modules/rxjs/operators';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public authUser: AuthService, private router: Router) { }

  ngOnInit() { }
}
