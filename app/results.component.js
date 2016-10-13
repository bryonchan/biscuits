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
var results_service_1 = require('./results.service');
var saved_tests_service_1 = require('./saved-tests.service');
var biscuit_mapping_1 = require('./biscuit-mapping');
var ResultsComponent = (function () {
    function ResultsComponent(questionService, resultsService, savedTestsService) {
        this.questionService = questionService;
        this.resultsService = resultsService;
        this.savedTestsService = savedTestsService;
        this.biscuitMapping = biscuit_mapping_1.biscuitMapping;
        this.biscuit = { name: '' };
        this.results = {};
        this.scores = [];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.results = this.resultsService.getResults();
        this.processResults();
        this.userName = this.resultsService.getUserName();
        if (this.userName) {
            this.savedTestsService.saveTest(this.userName, this.biscuit.name, this.results);
        }
    };
    ResultsComponent.prototype.processResults = function () {
        var self = this;
        biscuit_mapping_1.biscuitMapping.forEach(function (b) {
            var score = self.calculateOverallScore(b);
            self.scores.push({ name: b.name, score: score });
        });
        this.scores.sort(function (a, b) {
            return a.score.total - b.score.total;
        });
        this.biscuit = this.scores[0];
    };
    ResultsComponent.prototype.printResults = function () {
        return JSON.stringify(this.results);
    };
    ResultsComponent.prototype.calculateScore = function (biscuit, type) {
        var variance = Math.abs(Math.round((biscuit[type] - this.results[type]) * 100) / 100);
        return variance;
    };
    ResultsComponent.prototype.calculateOverallScore = function (biscuit) {
        var cScore = this.calculateScore(biscuit, 'C');
        var nScore = this.calculateScore(biscuit, 'N');
        var oScore = this.calculateScore(biscuit, 'O');
        var eScore = this.calculateScore(biscuit, 'E');
        var aScore = this.calculateScore(biscuit, 'A');
        var total = Math.round((cScore + nScore + oScore + eScore + aScore) * 100) / 100;
        return { C: cScore, N: nScore, O: oScore, E: eScore, A: aScore, total: total };
    };
    ResultsComponent = __decorate([
        core_1.Component({
            selector: 'results',
            template: "\n\t\t<p class=\"result\">Congratulations <span class=\"username\">{{userName}}</span>, your birthday biscuit is the <span class=\"biscuit\">{{biscuit.name}}</span></p>\n\n\t\t<table class=\"table table-striped\">\n\t\t<thead>\n\t\t\t<tr><th>Conscientiousness</th><th>Neuroticism</th><th>Extraversion</th><th>Openness</th><th>Agreeableness</th></tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td>{{results.C}}</td>\n\t\t\t\t<td>{{results.N}}</td>\n\t\t\t\t<td>{{results.E}}</td>\n\t\t\t\t<td>{{results.O}}</td>\n\t\t\t\t<td>{{results.A}}</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t\t</table>\n\n\t\t<h3>How the cookies crumbled:</h3>\n\n\t\t<table class=\"table table-striped\">\n\t\t<thead>\n\t\t\t<tr><th>Name</th><th>C</th><th>N</th><th>E</th><th>O</th><th>A</th><th>Total</th></tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let b of scores\">\n\t\t\t\t<td>{{b.name}}</td>\n\t\t\t\t<td>{{b.score.C}}</td>\n\t\t\t\t<td>{{b.score.N}}</td>\n\t\t\t\t<td>{{b.score.E}}</td>\n\t\t\t\t<td>{{b.score.O}}</td>\n\t\t\t\t<td>{{b.score.A}}</td>\n\t\t\t\t<td>{{b.score.total}}</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t\t</table>\n\t\t<pre class=\"hide\">{{printResults()}}</pre>\n\t\t\n\t"
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService, results_service_1.ResultsService, saved_tests_service_1.SavedTestsService])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map