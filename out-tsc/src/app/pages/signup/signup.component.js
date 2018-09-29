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
var auth_1 = require("angularfire2/auth");
var operators_1 = require("rxjs/operators");
var firebase = require("firebase");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(_firebaseAuth, fb) {
        this._firebaseAuth = _firebaseAuth;
        this.fb = fb;
        this.signupForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required]]
        });
        this.hide = true;
        this.user = this._firebaseAuth.authState.pipe(operators_1.filter(Boolean));
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.doRegister = function () {
        var _this = this;
        var email = this.signupForm.get('email').value;
        var password = this.signupForm.get('password').value;
        console.log(this.signupForm.get('email').value, 'form value email');
        return new Promise(function (resolve, reject) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(function (res) {
                resolve(res);
                console.log(res, 'resolved');
            }, function (err) {
                reject(err), (_this.errorText = err);
            });
        });
    };
    SignupComponent.prototype.getErrorMessage = function () {
        return this.signupForm.get('email').hasError('required')
            ? 'You must enter a value'
            : this.signupForm.get('email').hasError('email')
                ? 'Not a valid email'
                : '';
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth, forms_1.FormBuilder])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map