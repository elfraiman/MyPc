(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _pages_installation_guide_installation_guide_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/installation-guide/installation-guide.component */ "./src/app/pages/installation-guide/installation-guide.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _directives_border_nav_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/border-nav.directive */ "./src/app/directives/border-nav.directive.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _pages_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/control-panel/control-panel.component */ "./src/app/pages/control-panel/control-panel.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footer-main/footer-main.component */ "./src/app/components/footer-main/footer-main.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
    },
    {
        path: '',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"]
    },
    {
        path: 'home',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"]
    },
    {
        path: 'installation',
        component: _pages_installation_guide_installation_guide_component__WEBPACK_IMPORTED_MODULE_0__["InstallationGuideComponent"]
    },
    {
        path: 'control-panel',
        component: _pages_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_16__["ControlPanelComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"],
                _components_footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_21__["FooterMainComponent"],
                _directives_border_nav_directive__WEBPACK_IMPORTED_MODULE_12__["BorderNavDirective"],
                _pages_installation_guide_installation_guide_component__WEBPACK_IMPORTED_MODULE_0__["InstallationGuideComponent"],
                _pages_control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_16__["ControlPanelComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_20__["HomePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["TooltipModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["AccordionModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_22__["CarouselModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuth"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer-main/footer-main.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/footer-main/footer-main.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  font-family: 'Montserrat', sans-serif;\n  background-color: #363636;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template: 1fr / 1fr 1fr 1fr;\n  height: 170px;\n  position: absolute;\n  width: 100%;\n}\n\n.left-box {\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 1;\n  grid-column: 1/2;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  padding: 10px 10px;\n  position: absolute;\n}\n\n.footer-title {\n  text-align: center;\n  font-size: 25px;\n  font-weight: 700;\n  color: white;\n}\n\n#middle-box {\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 1;\n  grid-column: 2/3;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  padding: 10px 15px;\n}\n\n#middle-list {\n  list-style: none;\n  color: white;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  -ms-grid-row-align: center;\n      align-self: center;\n  padding: 10px 10px;\n  font-size: 15px;\n  text-align: center;\n}\n\n#middle-list li {\n  transition: padding-bottom 0.5s, font-size 0.5s;\n}\n\n#middle-list li:hover {\n  font-size: 28px;\n  cursor: pointer;\n  font-weight: 700;\n}\n\n#right-box {\n  color: white;\n  -ms-grid-row-align: center;\n      align-self: center;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  padding: 10px 15px;\n}\n\nmat-divider {\n  background-color: white;\n}\n"

/***/ }),

/***/ "./src/app/components/footer-main/footer-main.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/footer-main/footer-main.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"left-box\">\n    <span class=\"footer-title\">\n      MyPc<span style=\"color: rgb(233, 214, 48)\">.</span><br>\n    </span>\n  </div>\n  <div id=\"middle-box\">\n    <ul id=\"middle-list\">\n      <li>GET STARTED</li>\n      <li>OUR STORY</li>\n      <li>CONTACT</li>\n      <li>FAQ</li>\n    </ul>\n  </div>\n  <div id=\"right-box\">\n    <p>Copyright @ MyPc 2018</p>\n  </div>\n  <mat-divider [vertical]=\"true\"></mat-divider>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer-main/footer-main.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/footer-main/footer-main.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterMainComponent", function() { return FooterMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterMainComponent = /** @class */ (function () {
    function FooterMainComponent() {
    }
    FooterMainComponent.prototype.ngOnInit = function () {
    };
    FooterMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-main',
            template: __webpack_require__(/*! ./footer-main.component.html */ "./src/app/components/footer-main/footer-main.component.html"),
            styles: [__webpack_require__(/*! ./footer-main.component.css */ "./src/app/components/footer-main/footer-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterMainComponent);
    return FooterMainComponent;
}());



/***/ }),

/***/ "./src/app/directives/border-nav.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/border-nav.directive.ts ***!
  \****************************************************/
/*! exports provided: BorderNavDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderNavDirective", function() { return BorderNavDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BorderNavDirective = /** @class */ (function () {
    // Renderer2 reminds me of jQuery, look up the documents !important
    function BorderNavDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.borderBottom = '1px solid transparent';
    }
    BorderNavDirective.prototype.ngOnInit = function () {
    };
    // HostListener decorator listens to any event
    BorderNavDirective.prototype.onscroll = function (eventData) {
        this.borderBottom = '0.5px solid black';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.borderBottom'),
        __metadata("design:type", String)
    ], BorderNavDirective.prototype, "borderBottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BorderNavDirective.prototype, "onscroll", null);
    BorderNavDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appBorderNav]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], BorderNavDirective);
    return BorderNavDirective;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  height: 80px;\n  padding: 0px 0px;\n  margin: 0px;\n  position: relative;\n}\n\n#navbarNavAltMarkup {\n  margin-left: 8%;\n}\n\n.navbar-nav a {\n  padding: 5px;\n  letter-spacing: 0.1rem;\n  font-weight: 700;\n  font-size: 13px;\n  margin: 5%;\n  transition: padding-bottom 0.7s, border-bottom 0.2s;\n  -moz-transition: padding-bottom 0.7s, border-bottom 0.2s;\n  -webkit-transition: padding-bottom 0.7s, border-bottom 0.2s;\n}\n\n.navbar-nav a:hover {\n  padding-bottom: 5%;\n  border-bottom: 5px solid #1709FF;\n}\n\n#user-actions button {\n  margin: 5px;\n}\n\n#brand {\n  position: absolute;\n  left: 50%;\n  margin-left: -50px !important;\n  /* 50% of your logo width */\n  display: block;\n  font-size: 25px;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  transition: background 0.5s, padding-bottom 0.5s, font-size 0.5s;\n}\n\n#brand:hover {\n  padding-bottom: 1%;\n  font-size: 28px;\n  background: -webkit-linear-gradient(#1709ff, #333);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n#sign-in-btn {\n  height: 80px;\n  font-size: 13px;\n  padding: 10px 10px;\n  width: 120px;\n  background-color: inherit;\n  border: none;\n  transition: padding-bottom 0.2s;\n  -moz-transition: padding-bottom 0.2s;\n  -webkit-transition: padding-bottom 0.2s;\n}\n\n#sign-in-btn:hover {\n  cursor: pointer;\n  padding-bottom: 10%;\n}\n\n#sign-up-btn {\n  background-color: rgb(36, 36, 36);\n  color: white;\n  border: none;\n  font-weight: 800;\n  font-size: 13px;\n  padding: 10px 10px;\n  width: 150px;\n  transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -webkit-transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -moz-transition: background-color 0.8s, border 1.0s, color 0.4s;\n}\n\n#sign-up-btn:hover {\n  cursor: pointer;\n  background-color: inherit;\n  border: 3px solid rgb(36, 36, 36);\n  color: rgb(36, 36, 36);\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top\n        navbar-expand-lg\n        navbar-light\" id=\"main-nav\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a id=\"brand\" class=\"navbar-brand\" routerLink=\"/home\">\n    MyPc\n  </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav justify-content-center\">\n      <a class=\"nav-item nav-link active\" routerLink=\"/home\">Home\n        <span class=\"sr-only\">(current)</span>\n      </a>\n      <a class=\"nav-item nav-link\" routerLink=\"../installation\">Installation</a>\n      <a class=\"nav-item nav-link\" href=\"#\">Pricing</a>\n      <a class=\"nav-item nav-link\" href=\"#\">Backup</a>\n    </div>\n  </div>\n  <div class=\"navbar-nav justify-content-right\" id=\"user-actions\">\n    <button *ngIf=\"!(user | async) \" id=\"sign-in-btn\" routerLink=\"../login\">Sign in</button>\n    <button *ngIf=\"user | async\" id=\"sign-in-btn\" (click)=\"authUser.signOut()\">Logout</button>\n    <button *ngIf=\"!(user | async)\" id=\"sign-up-btn\" routerLink=\"../signup\">GET STARTED</button>\n    <button *ngIf=\"(user | async)\" id=\"sign-up-btn\" routerLink=\"../control-panel\">Control Panel</button>\n  </div>\n</nav>\n\n<!--DROP DOWN\n   <li class=\"nav-item dropdown\" ngbDropdown>\n    <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Category</a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n      <a class=\"dropdown-item\" href=\"#\">Angular</a>\n      <a class=\"dropdown-item\" href=\"#\">React</a>\n      <a class=\"dropdown-item\" href=\"#\">Vue.js</a>\n    </div>\n  </li>\n-->\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authUser, router) {
        this.authUser = authUser;
        this.router = router;
        this.user = this.authUser.user.pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (user) { return !Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(user); }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return user; }));
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/pages/control-panel/control-panel.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/control-panel/control-panel.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-top: 80px;\n}\n"

/***/ }),

/***/ "./src/app/pages/control-panel/control-panel.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/control-panel/control-panel.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"main-content\">\n\n</div>\n\n<h2>\n  {{ (user | async)?.displayName }}\n  {{ (user | async)?.email }}\n  {{ (user | async)?.phoneNumber }}\n</h2>\n"

/***/ }),

/***/ "./src/app/pages/control-panel/control-panel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/control-panel/control-panel.component.ts ***!
  \****************************************************************/
/*! exports provided: ControlPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanelComponent", function() { return ControlPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _node_modules_angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlPanelComponent = /** @class */ (function () {
    function ControlPanelComponent(_firebaseAuth) {
        this._firebaseAuth = _firebaseAuth;
        this.user = this._firebaseAuth.authState.pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean));
    }
    ControlPanelComponent.prototype.ngOnInit = function () { };
    ControlPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-panel',
            template: __webpack_require__(/*! ./control-panel.component.html */ "./src/app/pages/control-panel/control-panel.component.html"),
            styles: [__webpack_require__(/*! ./control-panel.component.css */ "./src/app/pages/control-panel/control-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], ControlPanelComponent);
    return ControlPanelComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"container-fluid header-container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h2 id=\"DONT-LOSE-IT\" class=\"animated fadeIn\">MYPC. YOUR PC, EVERYWHERE</h2>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <p>Keep your data safe before it's too late. Take action today with our automated system and affordable approach.</p>\n  </div>\n  <div class=\"row justify-content-center padding-bottom\">\n    <button id=\"start-now\" routerLink=\"/signup\">Start now</button>\n  </div>\n</div>\n\n<!-- generation container -->\n<div class=\"container-fluid generation-container animated fadeIn\">\n  <div class=\"row justify-content-center padding\">\n    <div class=\"col-sm\">\n      <h2 style=\"text-align: center;\">The new generation of computers</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <carousel>\n        <slide>\n          <img src=\"../../../assets/man.jpeg\" alt=\"first slide\" style=\"display: block; width: 100vw; height: 60vh;\">\n          <div class=\"\n            carousel-caption d-none d-md-block\">\n            <h3>First slide label</h3>\n            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n          </div>\n        </slide>\n        <slide>\n          <img src=\"../../../assets/desk.jpg\" alt=\"second slide\" style=\"display: block; width: 100vw; height: 60vh;\">\n          <div class=\"\n        carousel-caption d-none d-md-block\">\n            <h3>Second slide label</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n          </div>\n        </slide>\n        <slide>\n          <img src=\"../../../assets/laptop.jpg\" alt=\"third slide\" style=\"display: block; width: 100vw; height: 60vh;\">\n          <div class=\"\n      carousel-caption d-none d-md-block\">\n            <h3>Third slide label</h3>\n            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n          </div>\n        </slide>\n      </carousel>\n    </div>\n  </div>\n</div>\n\n<!-- Who we are -->\n<div class=\"container-fluid who-container animated fadeIn\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm\">\n      <h2 style=\"text-align: center\">Who we are</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <p style=\"text-align: center\">\n        Founded in 2000, Throughout our history, we have always provided out customers with top quality products at\n        the\n        best value. While the pace of technological development is unprecedented, the keys to our success over the\n        years haven't changed. We constantly improve our business practices, stock the latest products, and grow our\n        knowledgeable and passionate team of professionals.\n      </p>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <button id=\"start-now\" routerLink=\"signup\">Start now</button>\n  </div>\n</div>\n\n<app-footer-main></app-footer-main>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#DONT-LOSE-IT {\n  text-align: center;\n  font-size: 120px;\n  font-weight: 800;\n  z-index: 1; }\n\n#start-now {\n  background-color: #242424;\n  color: white;\n  border: none;\n  font-weight: 800;\n  font-size: 13px;\n  padding: 10px 10px;\n  width: 150px;\n  height: 40px;\n  transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -webkit-transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -moz-transition: background-color 0.8s, border 1.0s, color 0.4s; }\n\n#start-now:hover {\n  cursor: pointer;\n  background-color: inherit;\n  border: 2px solid #242424;\n  color: #242424; }\n\n.header-container {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.105); }\n\n.header-container .row {\n    padding: 20px 20px 20px 20px; }\n\n.padding-bottom {\n  padding-bottom: 16px; }\n\n.generation-container {\n  padding-top: 35px; }\n\n.generation-container h2 {\n    font-size: 50px; }\n\n.generation-container .row {\n    padding: 20px 20px 20px 20px; }\n\n.who-container {\n  height: 50vh;\n  padding: 20px 20% 50px 20%; }\n\n.who-container .row {\n    padding-top: 35px;\n    padding-bottom: 35px; }\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/pages/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/installation-guide/installation-guide.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/installation-guide/installation-guide.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0px 20vw 0px 20vw;\n}\n\n.row {\n  display: flex;\n  justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/pages/installation-guide/installation-guide.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/installation-guide/installation-guide.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"animated fadeInLeft\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <h2 style=\"text-align: center;\"> How to boot your MyPc device</h2>\n      </div>\n    </div>\n    <div class=\"row padding\">\n      <span style=\"font-weight: 800\">Step 1. How to boot your MyPc device.</span>\n      <br> This step you will be using when moving between different computers!\n      <br> So the first thing is how to get to the “boot menu”.\n      <br> Using boot menu is very easy anyone can do this you will need an assign keyboard key to press which will\n      open\n      the boot\n      menu when the computer starts.\n      <br> Normally the first boot screen give you the instruction like a key name to open it or you can try some\n      default\n      keys\n      to open it. If the boot screen didn’t show you something then you can try these key one by one to open the boot\n      menu.\n      The keys are Esc, F7, F8, F9, F10, F11 and F12 you can try these keys one at a time by pressing it again and\n      again\n      after\n      the 2 sec of your system starts and if the key is correct your boot menu will open.\n      <br> Try the F10, 11, 12 first because it will assign most for the menu. Sometimes the Esc key take you to the\n      menu\n      where\n      use can select the item what you want to open like bios, boot menu, memory test etc. I means you can try that one\n      too\n      if your computer has that one.\n    </div>\n    <div class=\"row\">\n      <img style=\"padding: 10px 10px\" src=\"../../assets/bootwindow.png\">\n      <img src=\"../../assets//boot-menu-keys-tablet.png\">\n      <p class=\"padding\">\n        By using the above keys now I think you are in the boot menu. In this menu now you are seeing all of your Hard\n        Drive, Cd\n        or DVD Drives and USB Device. Now you can easily select the drive what you want to boot from and make it work.\n        Now\n        you want to boot from your USB, you can do it by just selecting the drive USB or USB HDD. Just select the item\n        by\n        your\n        keyboard’s aero key and hit enter that’s it.\n      </p>\n\n      <img class=\"padding\" src=\"../../assets/image3.png\">\n      <img class=\"padding\" src=\"../../assets/image4.png\">\n    </div>\n  </div>\n\n  <app-footer-main></app-footer-main>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- \n<div class=\"main-content\">\n  <div class=\"title hide-on-init\">\n    <h2> How to boot your MyPc device</h2>\n    <hr>\n  </div>\n\n\n  <div class=\"main-body hide-on-init\">\n    <span style=\"font-weight: 800\">Step 1. How to boot your MyPc device.</span>\n    <br> This step you will be using when moving between different computers!\n    <br> So the first thing is how to get to the “boot menu”.\n    <br> Using boot menu is very easy anyone can do this you will need an assign keyboard key to press which will open\n    the boot\n    menu when the computer starts.\n    <br> Normally the first boot screen give you the instruction like a key name to open it or you can try some default\n    keys\n    to open it. If the boot screen didn’t show you something then you can try these key one by one to open the boot\n    menu.\n    The keys are Esc, F7, F8, F9, F10, F11 and F12 you can try these keys one at a time by pressing it again and again\n    after\n    the 2 sec of your system starts and if the key is correct your boot menu will open.\n    <br> Try the F10, 11, 12 first because it will assign most for the menu. Sometimes the Esc key take you to the menu\n    where\n    use can select the item what you want to open like bios, boot menu, memory test etc. I means you can try that one\n    too\n    if your computer has that one.\n  </div>\n\n  <div class=\"boot-picture hide-on-init\">\n    <img style=\"padding: 10px 10px\" src=\"../../assets/bootwindow.png\">\n    <img src=\"../../assets//boot-menu-keys-tablet.png\">\n  </div>\n\n  <div class=\"under-picture-text hide-on-init\">\n    <p>\n      By using the above keys now I think you are in the boot menu. In this menu now you are seeing all of your Hard\n      Drive, Cd\n      or DVD Drives and USB Device. Now you can easily select the drive what you want to boot from and make it work.\n      Now\n      you want to boot from your USB, you can do it by just selecting the drive USB or USB HDD. Just select the item by\n      your\n      keyboard’s aero key and hit enter that’s it.\n    </p>\n  </div>\n  <div class=\"bios-pictures hide-on-init\">\n    <img style=\"padding: 10px 10px\" src=\"../../assets/image3.png\">\n\n    <img src=\"../../assets/image4.png\">\n  </div>\n</div>\n -->\n"

/***/ }),

/***/ "./src/app/pages/installation-guide/installation-guide.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/installation-guide/installation-guide.component.ts ***!
  \**************************************************************************/
/*! exports provided: InstallationGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationGuideComponent", function() { return InstallationGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstallationGuideComponent = /** @class */ (function () {
    function InstallationGuideComponent() {
    }
    InstallationGuideComponent.prototype.ngOnInit = function () {
    };
    InstallationGuideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-installation-guide',
            template: __webpack_require__(/*! ./installation-guide.component.html */ "./src/app/pages/installation-guide/installation-guide.component.html"),
            styles: [__webpack_require__(/*! ./installation-guide.component.css */ "./src/app/pages/installation-guide/installation-guide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InstallationGuideComponent);
    return InstallationGuideComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto;\n  -ms-grid-columns: auto;\n      grid-template: auto/auto;\n  margin-top: 10%;\n}\n\nh3 {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  grid-row: 1/2;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  font-size: 16px;\n}\n\n.email {\n  -ms-grid-row: 2;\n  -ms-grid-row-span: 1;\n  grid-row: 2/3;\n  -ms-grid-column-align: center;\n      justify-self: center;\n}\n\n.password {\n  -ms-grid-row: 3;\n  -ms-grid-row-span: 1;\n  grid-row: 3/4;\n  -ms-grid-column-align: center;\n      justify-self: center;\n}\n\n#login-btn {\n  -ms-grid-row: 6;\n  -ms-grid-row-span: 1;\n  grid-row: 6/7;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  background-color: rgb(36, 36, 36);\n  color: white;\n  border: none;\n  font-weight: 800;\n  font-size: 13px;\n  padding: 8px 8px;\n  width: 120px;\n  height: 40px;\n  margin: 0px 10px 0px 10px;\n  transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -webkit-transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -moz-transition: background-color 0.8s, border 1.0s, color 0.4s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: white;\n  border: 2px solid rgb(36, 36, 36);\n  color: rgb(36, 36, 36);\n}\n\n#google-btn {\n  -ms-grid-row: 7;\n  -ms-grid-row-span: 1;\n  grid-row: 7/8;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  background-color: rgb(81, 192, 243);\n  color: white;\n  border: none;\n  font-weight: 800;\n  font-size: 13px;\n  padding: 8px 8px;\n  width: 150px;\n  height: 40px;\n  margin-top: 20px;\n  transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -webkit-transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -moz-transition: background-color 0.8s, border 1.0s, color 0.4s;\n}\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"main-content\">\n  <h2 style=\"text-align: center;\">Please log-in</h2>\n  <div class=\"email\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    </mat-form-field>\n  </div>\n  <div class=\"password\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input [formControl]=\"password\" matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    </mat-form-field>\n  </div>\n\n  <div class=\"row \">\n    <div class=\"col-sm justify-content-center\">\n      <button id=\"login-btn\" (click)=\"signInWithEmail()\">Login</button>\n      <b style=\"display: flex; align-self: center;\">Or</b>\n      <button id=\"login-btn\" style=\"background-color: #880e4f\" routerLink=\"/signup\">Register</button>\n    </div>\n  </div>\n  <button id=\"google-btn\" type=\"button\" class=\"btn btn-block\" (click)=\"signInWithGoogle()\">\n    <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n    Login with Google\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, toastCtrl) {
        this.auth = auth;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signInWithEmail = function () {
        this.auth.signInWithEmail(this.email.value, this.password.value);
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.googleLogin().then(function (promise) {
            _this.router.navigate(['home']);
        }).catch(function (error) { return _this.toastCtrl.error(error); });
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required')
            ? 'You must enter a value'
            : this.email.hasError('email')
                ? 'Not a valid email'
                : '';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto;\n  -ms-grid-columns: auto;\n      grid-template: auto/auto;\n  margin-top: 10%;\n}\n\nh3 {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 1;\n  grid-row: 1/2;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  font-size: 16px;\n}\n\n.email {\n  -ms-grid-row: 2;\n  -ms-grid-row-span: 1;\n  grid-row: 2/3;\n  -ms-grid-column-align: center;\n      justify-self: center;\n}\n\n.password {\n  -ms-grid-row: 4;\n  -ms-grid-row-span: 1;\n  grid-row: 4/5;\n  -ms-grid-column-align: center;\n      justify-self: center;\n}\n\n#login-btn {\n  -ms-grid-row: 5;\n  -ms-grid-row-span: 1;\n  grid-row: 5/6;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  background-color: rgb(36, 36, 36);\n  color: white;\n  border: none;\n  font-weight: 800;\n  font-size: 13px;\n  padding: 8px 8px;\n  width: 120px;\n  height: 40px;\n  transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -webkit-transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -moz-transition: background-color 0.8s, border 1.0s, color 0.4s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: white;\n  border: 2px solid rgb(36, 36, 36);\n  color: rgb(36, 36, 36);\n}\n\n#google-btn {\n  -ms-grid-row: 6;\n  -ms-grid-row-span: 1;\n  grid-row: 6/7;\n  -ms-grid-column-align: center;\n      justify-self: center;\n  background-color: rgb(81, 192, 243);\n  color: white;\n  border: none;\n  font-weight: 800;\n  font-size: 13px;\n  padding: 8px 8px;\n  width: 150px;\n  height: 40px;\n  margin-top: 20px;\n  transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -webkit-transition: background-color 0.8s, border 1.0s, color 0.4s;\n  -moz-transition: background-color 0.8s, border 1.0s, color 0.4s;\n}\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"main-content\">\n  <h2 style=\"text-align: center;\">Please Sign-up</h2>\n  <p class=\"email\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Email</mat-label>\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    </mat-form-field>\n  </p>\n  <p class=\"password\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Password</mat-label>\n      <input [formControl]=\"password\" matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    </mat-form-field>\n  </p>\n  <button id=\"login-btn\" (click)=\"doRegister()\">Register</button>\n  <button id=\"google-btn\" type=\"button\" class=\"btn btn-block\" (click)=\"doGoogleRegister()\">\n    <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\n    Register with Google\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, fb, router) {
        this.auth = auth;
        this.fb = fb;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.hide = true;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.doRegister = function () {
        this.auth.signupWithEmail(this.email.value, this.password.value);
    };
    SignupComponent.prototype.doGoogleRegister = function () {
        var _this = this;
        this.auth.googleLogin().then(function (promise) {
            _this.router.navigate(['home']);
        });
    };
    SignupComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required')
            ? 'You must enter a value'
            : this.email.hasError('email')
                ? 'Not a valid email'
                : '';
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/pages/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: EmailPasswordCredentials, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPasswordCredentials", function() { return EmailPasswordCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var EmailPasswordCredentials = /** @class */ (function () {
    function EmailPasswordCredentials() {
    }
    return EmailPasswordCredentials;
}());

var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router, toastCtrl) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.usersCollection$ = this.afs.collection('users').valueChanges();
        this.usersCollection$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (docs) { return docs.forEach(function (doc) {
            if (doc.displayName) {
                console.log('matching nickname', doc.displayName);
            }
        }); })).subscribe();
        //// Get auth data, then get firestore user document || null
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
        }));
    }
    AuthService.prototype.signupWithEmail = function (email, password) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.router.navigate(['login']);
                this.toastCtrl.success('Signed-up successfuly, you may now log-in');
                return [2 /*return*/, this.afs.doc('users/' + response.user.uid).set({
                        email: email,
                        uid: response.user.email,
                    })];
            });
        }); }).catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.toastCtrl.error(error);
                console.log(error, 'error');
                return [2 /*return*/];
            });
        }); });
    };
    AuthService.prototype.signInWithEmail = function (email, password) {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (response) {
            console.log('AuthService: Success', response.user);
            _this.router.navigate(['']);
            _this.toastCtrl.success('Successfuly logged in');
        }).catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.toastCtrl.error(error);
                console.log(error, 'error');
                return [2 /*return*/];
            });
        }); });
    };
    AuthService.prototype.googleLogin = function () {
        var _this = this;
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider).then(function (promise) { return _this.toastCtrl.success('Successfuly logged in with google'); });
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.updateUserData(credential.user);
        }).catch(function (error) { return _this.toastCtrl.error(error); });
    };
    AuthService.prototype.updateUserData = function (user) {
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return userRef.set(data, { merge: true });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['']);
            _this.toastCtrl.success('Succesfully signed out');
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAzT97ptmfba-T7Av2zT2wmTczWnQjLBvg',
        authDomain: 'mypc-5731c.firebaseapp.com',
        databaseURL: 'https://mypc-5731c.firebaseio.com',
        projectId: 'mypc-5731c',
        storageBucket: '',
        messagingSenderId: '864832263828'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elan/Documents/code/yoni-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map