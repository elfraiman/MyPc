import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import * as firebase from 'firebase';

interface IUser {
  uid: string;
  email: string;
  name: string;
  lastName: string;
  phone: number;
  address: string;
  userPackage: string;
  maxCloudStorage: number;
  currentCloudStorage: number;
}


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  public user: firebase.User;

  public storageRef = firebase.storage().ref();

  public chartType = 'bar';

  public chartData: Array<number> = [200, 500, 800, 1500, 2000];

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


  constructor(public firestoreService: FirestoreService) { }

  async ngOnInit() {
    this.user = await this.firestoreService.getUser();
   }

}
