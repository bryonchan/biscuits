import { Injectable } from '@angular/core';

import { questions, Question } from './questions';

export class SavedUser {
	name: string;
	biscuit: string;
	results: any;
}

@Injectable()

export class SavedTestsService {
	users: SavedUser[] = [];
	saveTest(name, biscuit, results) {
		this.users.push({name: name, biscuit: biscuit, results: results});
		this.saveUsersToLocalStorage();
	}

	saveUsersToLocalStorage() : void{
		localStorage.setItem('biscuitSavedUsers', JSON.stringify(this.users));
	}

	getUsersFromLocalStorage() : void {
		var usersStr = localStorage.getItem('biscuitSavedUsers');
		if(!usersStr){
			this.users = [];
		}else{
			this.users = JSON.parse(usersStr);

		}
	}

	getTests(): any[]{
		return this.users;
	}
	
	
}