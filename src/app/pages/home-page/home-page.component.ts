import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TweenLite } from 'gsap';
import { filter, map, take } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('services') servicesDiv: ElementRef;
  @ViewChild('wrapper') wrapperDiv: ElementRef;
  public user$ = this.afAuth.authState.pipe(
    filter(val => !isNullOrUndefined(val)),
    map(val => val.email)
  );
  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  async ngOnInit() {
   const user = await this.user$.pipe(take(1)).toPromise();

   if ( user ) {
     this.router.navigate(['control-panel']);
   }
  }


ngAfterViewInit() {
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


