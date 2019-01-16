import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter, map, take } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material';
import { FileDownloadComponent } from 'src/app/components/file-download/file-download.component';

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
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  public userAuth: firebase.User;
  public userDoc;
  public user$;
  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore, public dialogRef: MatDialog) {}

  async ngOnInit() {
    this.userAuth = await this.afAuth.user
      .pipe(
        filter(innerUser => Boolean(innerUser)),
        take(1)
      )
      .toPromise();

    this.userDoc = await this.afs
      .collection('users')
      .doc(this.userAuth.email)
      .get()
      .toPromise()
			.then(doc => doc.data());

    this.user$ = this.afs
      .collection('users')
      .doc(this.userAuth.email)
			.snapshotChanges();
			console.log(this.userDoc, ' user doc ');
  }

  openDownload() {
    this.dialogRef.open(FileDownloadComponent, {
      maxWidth: '100%',
      maxHeight: '100%',
      width: '80%'
    });
  }
}
