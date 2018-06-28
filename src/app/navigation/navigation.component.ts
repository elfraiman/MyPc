import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public user: object = {
    name: 'Elan',
    email: 'elfraiman@gmail.com'
  }

  userConnected: boolean = true;

  constructor() {
   }

  ngOnInit() {
  }

  disconnectUser() {
    this.userConnected = false;
  }

}
