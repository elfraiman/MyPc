import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { filter, take } from 'rxjs/operators';

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

  constructor(private aFstorage: AngularFireStorage, public afAuth: AngularFireAuth, public afs: AngularFirestore) {}
  async ngOnInit() {
    const user = await this.afAuth.user
      .pipe(
        filter( innerUser => Boolean(innerUser) ),
        take(1)
      )
      .toPromise();

    const userDoc = await this.afs
      .collection('users')
      .doc(user.email)
      .get()
      .toPromise()
      .then(doc => doc.data());

    const promises: Promise<IViewFile>[] = (userDoc.userFiles as any[]).map(path => this.getViewFile(path));
    try {
      this.viewFiles = await Promise.all(promises);
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
}
