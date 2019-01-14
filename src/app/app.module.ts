import 'hammerjs';
import { InstallationGuideComponent } from './pages/installation-guide/installation-guide.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BorderNavDirective } from './directives/border-nav.directive';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { TooltipModule, AccordionModule, CarouselModule } from 'ngx-bootstrap';
import { ContactComponent } from './pages/contact/contact.component';
import { PricePageComponent } from './pages/price-page/price-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { FirestoreService } from './firestore.service';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';


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
    path: 'installation',
    component: InstallationGuideComponent
  },
  {
    path: 'control-panel',
    component: ControlPanelComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'pricing',
    component: PricePageComponent
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
    FileUploadComponent
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
    MatInputModule
  ],
  providers: [AuthService, AngularFirestore, AngularFireAuth, FirestoreService, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule {}
