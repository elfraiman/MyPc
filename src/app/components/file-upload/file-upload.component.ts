import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { isNullOrUndefined } from 'util';
import { filter, map, take, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import * as firebase from 'firebase';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  public userEmail$ = this.afAuth.authState.pipe(
    filter(val => !isNullOrUndefined(val)),
    map(val => val.email)
  );

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastrService
  ) {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  async startUpload(event: FileList) {
    const userEmail = await this.userEmail$.pipe(take(1)).toPromise();
    const userDoc = this.afs.collection('users').doc(userEmail);

    await userDoc
      .get()
      .toPromise()
      .then(async doc => {
        const userMaxStorage = parseInt(doc.get('maxCloudStorage'), 10);
        const currentUserStorage = parseInt(doc.get('currentCloudStorage'), 10);
        if (doc.exists && currentUserStorage < userMaxStorage) {
          // The File object
          const file = event.item(0);

          // Client-side validation example
          /*  if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    } */
          const date = moment(new Date()).format('MMMM Do YYYY');
          // The storage path
					const path = `user-uploads/${userEmail}/${file.name}`;

          // Totally optional metadata
          const customMetadata = { app: 'MYPC Meta data' };

          // The main task
					this.task = this.storage.upload(path, file, { customMetadata });

          // Progress monitoring
          this.percentage = this.task.percentageChanges();
					this.snapshot = this.task.snapshotChanges();

          await this.snapshot.toPromise().then((value: firebase.storage.UploadTaskSnapshot) => {
            const currentUserStorageValue = doc.get('currentCloudStorage');
            console.log(currentUserStorage, 'current user storage');
            // uploaded in KB;
            const uploadedFileSize = Number(value.totalBytes / 1024);
            console.log(uploadedFileSize, 'uploaded size');
            // final in MB;
            const finalValue = currentUserStorageValue + uploadedFileSize / 1024;
            console.log('final value', finalValue, 'value', value);
              userDoc
                .set(
                  {
                    currentCloudStorage: finalValue,
                  },
                  { merge: true }
                )
								.catch(err => console.log('error updaing user data', err));
								userDoc.update({
                  userFiles: firebase.firestore.FieldValue.arrayUnion(value.ref.fullPath)
                });
          });
        } else {
          this.toastCtrl.error('You are out of storage space');
        }
      });
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
