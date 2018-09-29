"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var firebase = require("firebase/app");
var operators_1 = require("rxjs/operators");
var auth_1 = require("angularfire2/auth");
var auth_service_1 = require("./../../services/auth.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_firebaseAuth, authUser, router) {
        this._firebaseAuth = _firebaseAuth;
        this.authUser = authUser;
        this.router = router;
        this.email = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]);
        this.hide = true;
        this.user = this._firebaseAuth.authState.pipe(operators_1.filter(Boolean));
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(this.authUser.isLoggedIn(), ' is logged in');
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function (promise) {
            console.log('login succesful', promise);
            _this.router.navigate(['home']);
        });
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required')
            ? 'You must enter a value'
            : this.email.hasError('email')
                ? 'Not a valid email'
                : '';
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth,
            auth_service_1.AuthService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map