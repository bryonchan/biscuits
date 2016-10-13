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
var router_1 = require('@angular/router');
var saved_tests_service_1 = require('./saved-tests.service');
var results_service_1 = require('./results.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, savedTestsService, resultsService) {
        this.router = router;
        this.savedTestsService = savedTestsService;
        this.resultsService = resultsService;
        this.tests = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.savedTestsService.getUsersFromLocalStorage();
        this.tests = this.savedTestsService.getTests();
    };
    DashboardComponent.prototype.onKey = function (event) {
        if (this.username && event.keyCode == 13) {
            this.start();
        }
    };
    DashboardComponent.prototype.start = function () {
        if (this.username) {
            this.resultsService.setUserName(this.username);
            var link = ['/question', 0];
            this.router.navigate(link);
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [router_1.Router, saved_tests_service_1.SavedTestsService, results_service_1.ResultsService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map