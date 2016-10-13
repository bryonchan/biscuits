import { Injectable } from '@angular/core';

import { questions, Question } from './questions';

@Injectable()

export class QuestionService {
	getQuestion(id: number): Question {
		 return questions[id];
	}
	getQuestions(): Question[] {
		 return questions;
	}
	
}