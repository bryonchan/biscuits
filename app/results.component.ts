import { Component, OnInit } from '@angular/core';

import { QuestionService } from './question.service';
import { ResultsService } from './results.service';
import { SavedTestsService } from './saved-tests.service';

import {biscuitMapping} from './biscuit-mapping'

@Component({
	selector:'results',
	template: `
		<p class="result">Congratulations <span class="username">{{userName}}</span>, your birthday biscuit is the <span class="biscuit">{{biscuit.name}}</span></p>

		<table class="table table-striped">
		<thead>
			<tr><th>Conscientiousness</th><th>Neuroticism</th><th>Extraversion</th><th>Openness</th><th>Agreeableness</th></tr>
		</thead>
		<tbody>
			<tr>
				<td>{{results.C}}</td>
				<td>{{results.N}}</td>
				<td>{{results.E}}</td>
				<td>{{results.O}}</td>
				<td>{{results.A}}</td>
			</tr>
		</tbody>
		</table>

		<h3>How the cookies crumbled:</h3>
		<table class="table table-striped">
		<thead>
			<tr><th>Name</th><th>C</th><th>N</th><th>E</th><th>O</th><th>A</th><th>Total</th></tr>
		</thead>
		<tbody>
			<tr *ngFor="let b of scores">
				<td>{{b.name}}</td>
				<td>{{b.score.C}}</td>
				<td>{{b.score.N}}</td>
				<td>{{b.score.E}}</td>
				<td>{{b.score.O}}</td>
				<td>{{b.score.A}}</td>
				<td>{{b.score.total}}</td>
			</tr>
		</tbody>
		</table>
		<pre class="hide">{{printResults()}}</pre>
		
	`
})

export class ResultsComponent implements OnInit{
	biscuitMapping = biscuitMapping;
	biscuit = {name: ''}
	results = {};
	scores = [];
	userName : string;
	constructor(private questionService: QuestionService,
		private resultsService: ResultsService,
		private savedTestsService: SavedTestsService
	){}
	ngOnInit(): void {
		this.results = this.resultsService.getResults();
		this.processResults();
		this.userName = this.resultsService.getUserName();
		if(this.userName){
			this.savedTestsService.saveTest(this.userName, this.biscuit.name, this.results);
		}
	}

	processResults(): void {
		var self = this;
		biscuitMapping.forEach(function(b){
			var score = self.calculateOverallScore(b);
			self.scores.push({name: b.name, score: score});
		});

		this.scores.sort(function(a, b){
			return a.score.total - b.score.total;
		});

		this.biscuit = this.scores[0];

	}

	printResults(): string {
		return JSON.stringify(this.results);
	}
	calculateScore(biscuit, type): number {
		var variance = Math.abs(Math.round((biscuit[type] - this.results[type]) * 100 ) / 100);
		return variance;
	}
	calculateOverallScore(biscuit): any {
		var cScore = this.calculateScore(biscuit, 'C');
		var nScore = this.calculateScore(biscuit, 'N');
		var oScore = this.calculateScore(biscuit, 'O');
		var eScore = this.calculateScore(biscuit, 'E');
		var aScore = this.calculateScore(biscuit, 'A');
		var total = Math.round((cScore + nScore + oScore + eScore + aScore)* 100 ) / 100;
		return {C: cScore, N: nScore, O: oScore, E: eScore, A: aScore, total: total};
	}

}