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
        core_1.HostBinding('style.borderBottom'),
        __metadata("design:type", String)
    ], BorderNavDirective.prototype, "borderBottom", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BorderNavDirective.prototype, "onscroll", null);
    BorderNavDirective = __decorate([
        core_1.Directive({
            selector: '[appBorderNav]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], BorderNavDirective);
    return BorderNavDirective;
}());
exports.BorderNavDirective = BorderNavDirective;
//# sourceMappingURL=border-nav.directive.js.map