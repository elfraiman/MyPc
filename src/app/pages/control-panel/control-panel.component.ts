import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';
import { Observable } from '../../../../node_modules/rxjs';
import { filter } from '../../../../node_modules/rxjs/operators';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  public user: Observable<firebase.User> = this._firebaseAuth.authState.pipe(filter(Boolean));


  public chartType = 'bar';

  public chartData: Array<any> = [200, 500, 800, 1500, 2000];

  public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [{
      hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
      hoverBorderWidth: 0,
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
  }];

  public chartOptions: any = {
      responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor(private _firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
    this.user.subscribe(value => console.log(value));
   }

}
