import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import { TweenLite } from 'gsap';
import { MdbCardComponent } from 'angular-bootstrap-md';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.css']
})
export class PricePageComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbCardComponent, { read: ElementRef }) card: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;
  public updatePackage: Function;

  constructor(public firestoreService: FirestoreService) {
  }

  ngOnInit() {
    this.updatePackage = this.firestoreService.updatePackage;
  }

  ngAfterViewInit() {

    TweenLite.fromTo(this.wrapper.nativeElement, 2, {
      opacity: 0,
    },
    {
      opacity: 1,
    });
  }

}
