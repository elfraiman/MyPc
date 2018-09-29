"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var installation_guide_component_1 = require("./pages/installation-guide/installation-guide.component");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var navigation_component_1 = require("./navigation/navigation.component");
var login_component_1 = require("./pages/login/login.component");
var signup_component_1 = require("./pages/signup/signup.component");
var header_main_component_1 = require("./pages/homepage/header-main/header-main.component");
var homepage_component_1 = require("./pages/homepage/homepage.component");
var footer_main_component_1 = require("./pages/homepage/footer-main/footer-main.component");
var body_main_component_1 = require("./pages/homepage/body-main/body-main.component");
var border_nav_directive_1 = require("./directives/border-nav.directive");
var angularfire2_1 = require("angularfire2");
var database_1 = require("angularfire2/database");
var auth_1 = require("angularfire2/auth");
var environment_1 = require("../environments/environment");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var auth_service_1 = require("./services/auth.service");
var ng2_animate_on_scroll_1 = require("ng2-animate-on-scroll");
var control_panel_component_1 = require("./pages/control-panel/control-panel.component");
var routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent
    },
    {
        path: '',
        component: homepage_component_1.HomepageComponent
    },
    {
        path: 'home',
        component: homepage_component_1.HomepageComponent
    },
    {
        path: 'installation',
        component: installation_guide_component_1.InstallationGuideComponent
    },
    {
        path: 'control-panel',
        component: control_panel_component_1.ControlPanelComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                header_main_component_1.HeaderMainComponent,
                homepage_component_1.HomepageComponent,
                footer_main_component_1.FooterMainComponent,
                body_main_component_1.BodyMainComponent,
                border_nav_directive_1.BorderNavDirective,
                installation_guide_component_1.InstallationGuideComponent,
                control_panel_component_1.ControlPanelComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                material_1.MatMenuModule,
                material_1.MatIconModule,
                material_1.MatToolbarModule,
                material_1.MatFormFieldModule,
                material_1.MatSelectModule,
                material_1.MatOptionModule,
                material_1.MatAutocompleteModule,
                material_1.MatBadgeModule,
                material_1.MatBottomSheetModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatDividerModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatStepperModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatTooltipModule,
                material_1.MatTreeModule,
                router_1.RouterModule.forRoot(routes),
                forms_1.ReactiveFormsModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                database_1.AngularFireDatabaseModule,
                auth_1.AngularFireAuthModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                ng2_animate_on_scroll_1.AnimateOnScrollModule.forRoot()
            ],
            providers: [auth_service_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map