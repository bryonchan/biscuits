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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Biscuit Quiz';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<div id=\"main-container\" class=\"container\">\n\t<div class=\"row\">\n\t   \t<div class=\"col-xs-12\">\n\t\t\t<h1>{{title}}</h1>\n\t\t    <nav>\n\t\t     <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Home</a>\n\t\t   </nav>\n\t   </div>\n   </div>\n   \t<div class=\"row\">\n\t   \t<div class=\"col-xs-12\">\n\t   \t\t<router-outlet></router-outlet>\n\t   \t</div>\n   \t</div>\n\n   </div>\n\t",
            moduleId: module.id,
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map