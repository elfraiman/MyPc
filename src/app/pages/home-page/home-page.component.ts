import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { TweenLite } from 'gsap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('video') myVideo: any;
  @ViewChild('pictureSlider') picSlider: ElementRef;

  private observer: IntersectionObserver;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.myVideo.nativeElement.play();

    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting === true) {
          TweenLite.to(this.picSlider.nativeElement, 2, { backgroundColor: 'rgba(123, 17, 184, 0.9)' });
        }
      },
      {
        threshold: 0.20
      }
    );

    this.observer.observe(this.picSlider.nativeElement);
  }
}
