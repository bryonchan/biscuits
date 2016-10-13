import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import { QuestionService } from './question.service';
import { ResultsService } from './results.service';
import { Question, Option } from './questions';


@Component ({
	selector: 'question',
	template: `
		<div class="question">
			<span class="count">{{question.id + 1}}/{{questions.length}}</span>
			<span class="question-text">{{question.question}}</span>
		</div>
		<div class="answers">
			<div class="answer" *ngFor="let a of question.options; let idx = index">
				<label>
				<input value="{{a.value}}" [(ngModel)]="answers[question.id]" (click)="submitAnswer(question, a)" type="radio" name="answer" />
				{{a.text}}
				</label>
			</div>
		</div>
		<button class="back-button" (click)="goBack()">Back</button>
		<pre class="hide">{{printAnswers()}}</pre>
		<pre class="hide">{{printResults()}}</pre>
		
	`
})

export class QuestionComponent implements OnInit{
	question: Question;
	questions: Question[];
	answers = {};

	lastQuestionId = 24;
	constructor(private questionService: QuestionService,
		private route: ActivatedRoute,
		private location: Location,
		private router: Router,
		private resultsService: ResultsService
	){}

	ran_col(): void { //function name
        var color = '#'; // hexadecimal starting symbol
        var letters = ['F140F1','AF0000','00DF00','001070','60DF00','00CF9F','8F00DF','C0C0C0']; //Set your colors here
        color += letters[Math.floor(Math.random() * letters.length)];
        document.getElementById('body').style.background = color; // Setting the random color on your div element.
    }
	ngOnInit(): void {

		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.questions = this.questionService.getQuestions();
			this.question = this.questions[id];
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
	}
	submitAnswer(question: Question, answer: Option): void {
		var self = this;
		setTimeout(function(){
			self.ran_col();
			self.resultsService.setAnswers(self.answers);
			self.resultsService.processResults();

			if(self.question.id != self.lastQuestionId){
				let id = +self.route.params.getValue("id").id;
				self.router.navigate(['/question', id+1]);
			}else{
				self.goToFinish();
			}
			
		}, 500);
		
	}

	

	goToFinish(): void {
		this.router.navigate(['/results']);
	}
	printResults(): string {
		return JSON.stringify(this.resultsService.getResults());
	}
	printAnswers(): string {
		return JSON.stringify(this.answers);
	}
	goBack(): void {
		this.location.back();
	}
}