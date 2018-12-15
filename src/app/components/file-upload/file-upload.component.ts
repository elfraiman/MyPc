import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { isNullOrUndefined } from 'util';
import { filter, map, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

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

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private afAuth: AngularFireAuth) { }


  toggleHover(event: boolean) {
    this.isHovering = event;
  }


 async startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    const userEmail = await this.userEmail$.pipe(take(1)).toPromise();

    // Client-side validation example
   /*  if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    } */

    // The storage path
    const path = `user-uploads/${userEmail}/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges();

    // The file's download URL
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
