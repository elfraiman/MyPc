import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

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


@Injectable({
  providedIn: 'root'
})
export class FirestoreService implements OnInit {

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
  }

  async ngOnInit() {
  }


  public async updatePackage(newPackageSize: number, userId: number) {
    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`users/${userId}`);

    userRef.update({
      maxCloudStorage: newPackageSize
    })
      .then(data => console.log(data, 'Succesfully updated users package'))
      .catch(error => console.log(error, 'error updating user package'));
  }

  public async getUser() {
    const userData = await this.afAuth.user.pipe(take(1)).toPromise();

    return userData;
  }
}
