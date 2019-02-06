import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import { TweenLite } from 'gsap';
import { MdbCardComponent } from 'angular-bootstrap-md';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.css']
})
export class PricePageComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbCardComponent, { read: ElementRef }) card: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;
  public updatePackage: Function;

  public form: FormGroup;

  public myPcSizes = [
    {price: 189, viewValue: '128GB'},
    {price: 203, viewValue: '240GB'},
    {price: 278, viewValue: '512GB'},
    {value: 372, viewValue: '1024GB'}
  ];

  constructor(public firestoreService: FirestoreService, public fb: FormBuilder) {
    this.form = this.fb.group({
      mypc: ['189', Validators.required]
    });

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
