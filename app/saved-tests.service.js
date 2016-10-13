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
var SavedUser = (function () {
    function SavedUser() {
    }
    return SavedUser;
}());
exports.SavedUser = SavedUser;
var SavedTestsService = (function () {
    function SavedTestsService() {
        this.users = [];
    }
    SavedTestsService.prototype.saveTest = function (name, biscuit, results) {
        this.users.push({ name: name, biscuit: biscuit, results: results });
        this.saveUsersToLocalStorage();
    };
    SavedTestsService.prototype.saveUsersToLocalStorage = function () {
        localStorage.setItem('biscuitSavedUsers', JSON.stringify(this.users));
    };
    SavedTestsService.prototype.getUsersFromLocalStorage = function () {
        var usersStr = localStorage.getItem('biscuitSavedUsers');
        if (!usersStr) {
            this.users = [];
        }
        else {
            this.users = JSON.parse(usersStr);
        }
    };
    SavedTestsService.prototype.getTests = function () {
        return this.users;
    };
    SavedTestsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SavedTestsService);
    return SavedTestsService;
}());
exports.SavedTestsService = SavedTestsService;
//# sourceMappingURL=saved-tests.service.js.map