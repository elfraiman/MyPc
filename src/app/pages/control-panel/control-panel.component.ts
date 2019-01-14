import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter, map, take } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { AngularFireAuth } from '@angular/fire/auth';

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
	styleUrls: [ './control-panel.component.css' ]
})
export class ControlPanelComponent implements OnInit {
	public userEmail: string;
	public userEmail$ = this.afAuth.authState.pipe(filter((val) => !isNullOrUndefined(val)), map((val) => val.email));

	public user;
  public user$;
	constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {}

	async ngOnInit() {
    this.userEmail = await this.userEmail$.pipe(take(1)).toPromise();
    this.user = await this.afs.collection('users').doc(this.userEmail).get().toPromise().then(doc => doc.data());
    this.user$ = this.afs.collection('users').doc(this.userEmail).snapshotChanges();

	}
}
