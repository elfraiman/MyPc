import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';


interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

export class EmailPasswordCredentials {
  email: string;
  password: string;
}


@Injectable()
export class AuthService {
  private usersCollection$: Observable<{}> = this.afs.collection('users').valueChanges();

  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
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
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  signupWithEmail(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(async response => {
        this.router.navigate(['login']);
        return this.afs.doc('users/' + response.user.uid).set({
          email,
          uid: response.user.email,
        } as User);
      }).catch(async error => {
        console.log(error, 'error');
      });
  }

  signInWithEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(response => {
      console.log('AuthService: Success', response.user);
      this.router.navigate(['tabs']);
    }).catch(async error => {
      console.log(error, 'error');
    });
  }



  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }


  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });

  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['base']);
    });
  }
}
