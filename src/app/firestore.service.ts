import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
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
export class FirestoreService {
  public user: Observable<IUser>;

  private usersCollection$: Observable<{}> = this.afs.collection('users').valueChanges();

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.usersCollection$.pipe(
      map((docs: any) => docs.forEach(doc => {
        if (doc.displayName) {
          console.log('matching nickname', doc.displayName);
        }
      }))
    ).subscribe();
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    console.log(this.user);
   }

  async getUser() {
    const userData = await this.user.pipe(take(1)).toPromise();
    return userData;
   }
}
