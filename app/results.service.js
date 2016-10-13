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
var question_service_1 = require('./question.service');
var ResultsService = (function () {
    function ResultsService(questionService) {
        this.questionService = questionService;
        this.answers = {};
        this.results = { C: 0, N: 0, E: 0, O: 0, A: 0 };
    }
    ResultsService.prototype.setAnswers = function (answers) {
        this.answers = answers;
    };
    ResultsService.prototype.processResults = function () {
        this.results = { C: 0, N: 0, E: 0, O: 0, A: 0 };
        var questions = this.questionService.getQuestions();
        for (var questionId in this.answers) {
            var question = questions[+questionId];
            var answer = +this.answers[questionId];
            this.results[question.type] += answer;
        }
    };
    ResultsService.prototype.getResults = function () {
        return this.results;
    };
    ResultsService.prototype.getUserName = function () {
        return this.userName;
    };
    ResultsService.prototype.setUserName = function (name) {
        this.userName = name;
    };
    ResultsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], ResultsService);
    return ResultsService;
}());
exports.ResultsService = ResultsService;
//# sourceMappingURL=results.service.js.map