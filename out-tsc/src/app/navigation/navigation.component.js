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
var router_1 = require("@angular/router");
var auth_1 = require("../../../node_modules/angularfire2/auth");
var operators_1 = require("../../../node_modules/rxjs/operators");
var auth_service_1 = require("./../services/auth.service");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_firebaseAuth, authUser, router) {
        this._firebaseAuth = _firebaseAuth;
        this.authUser = authUser;
        this.router = router;
        this.user = this._firebaseAuth.authState.pipe(operators_1.filter(Boolean));
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.css']
        }),
        __metadata("design:paramtypes", [auth_1.AngularFireAuth, auth_service_1.AuthService, router_1.Router])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map