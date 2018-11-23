import 'hammerjs';
import { InstallationGuideComponent } from './pages/installation-guide/installation-guide.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'angular-bootstrap-md';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { TooltipModule, AccordionModule, CarouselModule } from 'ngx-bootstrap';
import { ContactComponent } from './pages/contact/contact.component';
import { PricePageComponent } from './pages/price-page/price-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

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
  },
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
    PricePageComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RoundProgressModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MDBBootstrapModule.forRoot(),
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    FormsModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ReactiveFormsModule,
    NgbModule.forRoot(),
    TooltipModule,
    AngularFireModule.initializeApp(environment.firebase),
    AccordionModule,
    CarouselModule
  ],
  providers: [AuthService, AngularFirestore, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
