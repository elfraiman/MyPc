import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  public stop$ = new Subject<void>();

  public form: FormGroup;
  public registerDisabled = true;
  public errorText: string;

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.form.valueChanges.pipe(
      takeUntil(this.stop$)
    ).subscribe(formValue => {
      console.log(formValue)
      if (formValue.email && formValue.password && formValue.name && formValue.lastName && formValue.address && formValue.phone) {
        this.registerDisabled = false;
      }
    });
  }

  ngOnInit() { }

  doRegister() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    const name = this.form.get('name').value;
    const lastName = this.form.get('lastName').value;
    const address = this.form.get('address').value;
    const phone = this.form.get('phone').value;

    this.auth.signupWithEmail(
      email, password, name,
      lastName, phone, address
    );
  }

  doGoogleRegister() {
    this.auth.googleLogin().then(promise => {
      this.router.navigate(['home']);
    });
  }


  ngOnDestroy() {
    this.stop$.next();
  }
}
