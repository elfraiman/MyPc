import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, map, take, debounce, debounceTime, filter } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private afAuth: AngularFireAuth, private router: Router) { }


    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.afAuth.user.pipe(
            take(1),
            map(user => {
                if (user) {
                    console.log('AuthGuard: Success', user);
                    return true;
                } else {
                    console.log('AuthGuard: denied!');
                    this.router.navigate(['login']);
                    return false;
                }
            })
        );
    }
}
