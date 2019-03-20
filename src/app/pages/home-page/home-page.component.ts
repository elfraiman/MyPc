import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { TweenLite } from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('services') servicesDiv: ElementRef;
  @ViewChild('wrapper') wrapperDiv: ElementRef;

  constructor(private router: Router) {
  }

  ngOnInit() {
    TweenLite.to(this.servicesDiv.nativeElement, 2, {opacity: 1});
    TweenLite.fromTo(this.wrapperDiv.nativeElement, 1, {width: '0%'}, {width: '100%'});

    setTimeout(() => {

      TweenLite.to(this.servicesDiv.nativeElement, 1, {opacity: 0});
      TweenLite.fromTo(this.wrapperDiv.nativeElement, 1, {width: '100%'}, {width: '0%'});
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 1500);
    }, 3000);
  }
}
