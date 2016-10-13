import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SavedTestsService } from './saved-tests.service';
import { ResultsService } from './results.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css'],
  moduleId: module.id
})
export class DashboardComponent implements OnInit { 
	username: string;
	tests = [];
	constructor(private router: Router, 
		private savedTestsService: SavedTestsService,
		private resultsService: ResultsService
		) {}
	ngOnInit(): void {
		this.savedTestsService.getUsersFromLocalStorage();
		this.tests = this.savedTestsService.getTests();
	} 
	onKey(event: KeyboardEvent): void {
		if(this.username && event.keyCode == 13){
			this.start();
		}
	}
	start(): void {
		if(this.username){
			this.resultsService.setUserName(this.username);
			let link = ['/question', 0];
			this.router.navigate(link);	
		}
	}
}
