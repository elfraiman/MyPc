import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


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

export class EmailPasswordCredentials {
  email: string;
  password: string;
}


@Injectable()
export class AuthService {
  private usersCollection$: Observable<{}> = this.afs.collection('users').valueChanges();

  public user: Observable<IUser>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private toastCtrl: ToastrService
  ) {
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
          console.log('null user');
          return of(null);
        }
      })
    );
  }

  signupWithEmail(email: string, password: string, name: string, lastName: string, phone: number, address: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(async response => {
        this.router.navigate(['login']);
        this.toastCtrl.success('Signed-up successfuly, you may now log-in');
        return this.afs.doc('users/' + response.user.email).set({
          email,
          uid: response.user.email,
          userPackage: 'free', // package
          name,
          lastName,
          phone,
          address,
          maxCloudStorage: 2000, // sets limit to upload
          currentCloudStorage: 0 // current limit
        } as IUser);
      }).catch(async error => {
        this.toastCtrl.error(error);
        console.log(error, 'error');
      });
  }

  signInWithEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(response => {
      console.log('AuthService: Success', response.user);
      this.router.navigate(['control-panel']);
      this.toastCtrl.success('Successfuly logged in');
    }).catch(async error => {
      this.toastCtrl.error(error);
      console.log(error, 'error');
    });
  }



  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider).then(promise => this.toastCtrl.success('Successfuly logged in with google'));
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      }).catch(error => this.toastCtrl.error(error));
  }


  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: IUser = {
      uid: user.uid,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      phone: user.phone,
      address: user.address,
      userPackage: user.userPackage,
      maxCloudStorage: user.maxCloudStorage,
      currentCloudStorage: user.currentCloudStorage
    };

    return userRef.set(data, { merge: true });

  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
      this.toastCtrl.success('Succesfully signed out');
    });
  }
}
