import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { filter, take, tap } from 'rxjs/operators';

interface IViewFile {
  downloadUrl: string;
  metaData: any;
}

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.scss']
})
export class FileDownloadComponent implements OnInit {
  public viewFiles: IViewFile[] = [];

  public imageSrc: string;

  public loading$ = true;

  constructor(private aFstorage: AngularFireStorage, public afAuth: AngularFireAuth, public afs: AngularFirestore) {
  }
  async ngOnInit() {
    this.loading$ = true;
    await this.fetchFiles();
  }

  private async fetchFiles() {
    const user = await this.afAuth.user
      .pipe(filter(innerUser => Boolean(innerUser)), take(1))
      .toPromise();
    const userDoc = await this.afs
      .collection('users')
      .doc(user.email)
      .get()
      .toPromise()
      .then(doc => doc.data());
    const promises: Promise<IViewFile>[] = (userDoc.userFiles as any[]).map(path => {
      if (path) {
        console.log(path, ' -- promise path ');
        return this.getViewFile(path);
      }
    });
    try {
      if (this.viewFiles) {
        this.viewFiles = await Promise.all(promises);
        this.loading$ = false;
      }
    } catch (e) {
      console.error('view files failed');
    }
  }

  public async getViewFile(path: string): Promise<IViewFile> {
    const viewFile: IViewFile = {
      downloadUrl: null,
      metaData: null
    };

    const downloadUrl = await this.aFstorage
      .ref(path)
      .getDownloadURL()
      .pipe(take(1))
      .toPromise();

    viewFile.downloadUrl = downloadUrl;

    const metaData = await this.aFstorage
      .ref(path)
      .getMetadata()
      .pipe(take(1))
      .toPromise();

    viewFile.metaData = metaData;
    return viewFile;
  }

  public downloadItem(url) {
    window.open(url);
  }

  public async deleteItem(fileData) {
    const user = await this.afAuth.user
      .pipe(
        filter( innerUser => Boolean(innerUser) ),
        take(1)
      )
      .toPromise();

    const userDoc: firebase.firestore.DocumentData = await this.afs
      .collection('users')
      .doc(user.email)
      .get()
      .toPromise()
      .then(doc => doc.data());

    const storageFile = this.aFstorage.ref(fileData.metaData.fullPath);
    const userFiles = userDoc.userFiles;
    const userCurrentCloudStorage = userDoc.currentCloudStorage;

    userFiles.forEach(async userFile => {
      if ( userFile  === fileData.metaData.fullPath) {
        // Delete file from userFiles and from storage
        const weightToRemove = fileData.metaData.size / 1024 / 1024;
        const weight = userCurrentCloudStorage - weightToRemove;
        console.log(weight, ' weight ');
        await this.afs
        .collection('users')
        .doc(user.email).update({
          userFiles: userFiles.filter(item => item !== userFile),
          currentCloudStorage: weight < 0 ? 0 : weight
        });

        storageFile.delete();
      }
    });
    this.fetchFiles();
  }
}
