import { Injectable } from '@angular/core';

import { QuestionService } from './question.service';

@Injectable()

export class ResultsService {
	answers = {};
	results = {C: 0, N: 0, E: 0, O: 0, A: 0};
	userName: string;
	constructor(private questionService: QuestionService){}
	setAnswers(answers): void {
		this.answers = answers;
	}
	processResults(): void {
		this.results = {C: 0, N: 0, E: 0, O: 0, A: 0};
		var questions = this.questionService.getQuestions();
		for(var questionId in this.answers){
			var question = questions[+questionId];
			var answer = +this.answers[questionId];
			this.results[question.type] += answer;
		}
	}
	getResults(): any {
		return this.results;
	}
	getUserName(): string {
		return this.userName;
	}
	setUserName(name: string) : void{
		this.userName = name;
	}
}