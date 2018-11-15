import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '../../../../node_modules/angularfire2/auth';
import { Observable } from '../../../../node_modules/rxjs';
import { filter } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  public user: Observable<firebase.User> = this._firebaseAuth.authState.pipe(filter(Boolean));

  constructor(private _firebaseAuth: AngularFireAuth) { }

  ngOnInit() { }
}
