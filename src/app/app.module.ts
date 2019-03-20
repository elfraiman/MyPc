import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
   MatListModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import 'hammerjs';
import { AccordionModule, CarouselModule, TooltipModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FileDownloadComponent } from './components/file-download/file-download.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { BorderNavDirective } from './directives/border-nav.directive';
import { DropZoneDirective } from './drop-zone.directive';
import { FirestoreService } from './firestore.service';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InstallationGuideComponent } from './pages/installation-guide/installation-guide.component';
import { LoginComponent } from './pages/login/login.component';
import { PricePageComponent } from './pages/price-page/price-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'control-panel',
    component: ControlPanelComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '#',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    FooterMainComponent,
    BorderNavDirective,
    InstallationGuideComponent,
    ControlPanelComponent,
    HomePageComponent,
    ContactComponent,
    PricePageComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileDownloadComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RoundProgressModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes, { useHash: false }),
    ReactiveFormsModule,
    NgbModule.forRoot(),
    TooltipModule,
    AngularFireModule.initializeApp(environment.firebase),
    AccordionModule,
    CarouselModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService, AngularFirestore, AngularFireAuth, FirestoreService, AngularFireStorage],
  bootstrap: [AppComponent],
  entryComponents: [FileDownloadComponent]
})
export class AppModule {}
