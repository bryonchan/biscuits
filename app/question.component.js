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
var common_1 = require('@angular/common');
var question_service_1 = require('./question.service');
var results_service_1 = require('./results.service');
var QuestionComponent = (function () {
    function QuestionComponent(questionService, route, location, router, resultsService) {
        this.questionService = questionService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.resultsService = resultsService;
        this.answers = {};
        this.lastQuestionId = 24;
    }
    QuestionComponent.prototype.ran_col = function () {
        var color = '#'; // hexadecimal starting symbol
        var letters = ['F140F1', 'AF0000', '00DF00', '001070', '60DF00', '00CF9F', '8F00DF', 'C0C0C0']; //Set your colors here
        color += letters[Math.floor(Math.random() * letters.length)];
        document.getElementById('body').style.background = color; // Setting the random color on your div element.
    };
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.questions = _this.questionService.getQuestions();
            _this.question = _this.questions[id];
            // this.c = this.questions.filter(function(q){
            // 	return q.type == 'C';
            // });
            // this.n = this.questions.filter(function(q){
            // 	return q.type == 'N';
            // });
            // this.e = this.questions.filter(function(q){
            // 	return q.type == 'E';
            // });
            // this.o = this.questions.filter(function(q){
            // 	return q.type == 'O';
            // });
            // this.a = this.questions.filter(function(q){
            // 	return q.type == 'A';
            // });
        });
    };
    QuestionComponent.prototype.submitAnswer = function (question, answer) {
        var self = this;
        setTimeout(function () {
            self.ran_col();
            self.resultsService.setAnswers(self.answers);
            self.resultsService.processResults();
            if (self.question.id != self.lastQuestionId) {
                var id = +self.route.params.getValue("id").id;
                self.router.navigate(['/question', id + 1]);
            }
            else {
                self.goToFinish();
            }
        }, 500);
    };
    QuestionComponent.prototype.goToFinish = function () {
        this.router.navigate(['/results']);
    };
    QuestionComponent.prototype.printResults = function () {
        return JSON.stringify(this.resultsService.getResults());
    };
    QuestionComponent.prototype.printAnswers = function () {
        return JSON.stringify(this.answers);
    };
    QuestionComponent.prototype.goBack = function () {
        this.location.back();
    };
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'question',
            template: "\n\t\t<div class=\"question\">\n\t\t\t<span class=\"count\">{{question.id + 1}}/{{questions.length}}</span>\n\t\t\t<span class=\"question-text\">{{question.question}}</span>\n\t\t</div>\n\t\t<div class=\"answers\">\n\t\t\t<div class=\"answer\" *ngFor=\"let a of question.options; let idx = index\">\n\t\t\t\t<label>\n\t\t\t\t<input value=\"{{a.value}}\" [(ngModel)]=\"answers[question.id]\" (click)=\"submitAnswer(question, a)\" type=\"radio\" name=\"answer\" />\n\t\t\t\t{{a.text}}\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<button class=\"back-button\" (click)=\"goBack()\">Back</button>\n\t\t<pre class=\"hide\">{{printAnswers()}}</pre>\n\t\t<pre class=\"hide\">{{printResults()}}</pre>\n\t\t\n\t"
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService, router_1.ActivatedRoute, common_1.Location, router_1.Router, results_service_1.ResultsService])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map