import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { TweenLite } from 'gsap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('middleblock') middleblock: ElementRef;
  @ViewChild('undermid') undermid: ElementRef;
  private observer: IntersectionObserver;
  private undermidObserver: IntersectionObserver;
  constructor() {
    this.observer = null;
  }

  ngOnInit() {}

  ngAfterViewInit() {

    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting === true) {
          console.log('intersect');
          TweenLite.to(this.middleblock.nativeElement, 1, {
              opacity: 1
            });
        }
      },
      {
        threshold: 0.35
      }
    );

    this.undermidObserver = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting === true) {
          console.log('intersect');
          TweenLite.to(this.undermid.nativeElement, 1, {
              opacity: 1
            });
        }
      },
      {
        threshold: 0.35
      }
    );
    setTimeout(() => {
      this.observer.observe(this.middleblock.nativeElement);
      this.undermidObserver.observe(this.undermid.nativeElement);
    }, 1000);
  }
}
