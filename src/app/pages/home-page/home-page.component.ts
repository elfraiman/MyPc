import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  @ViewChild('video') myVideo: any;

  constructor() {
  }

  ngOnInit() {
  }

   ngAfterViewInit() {
    this.myVideo.nativeElement.play();
  }


}
