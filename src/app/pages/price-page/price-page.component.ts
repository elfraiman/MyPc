import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.css']
})
export class PricePageComponent implements OnInit {


  public updatePackage: Function;


  constructor(public firestoreService: FirestoreService) {

  }

  ngOnInit() {
    this.updatePackage = this.firestoreService.updatePackage;
  }

}
