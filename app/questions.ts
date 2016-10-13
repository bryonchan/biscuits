export class Option {
	text: string;
	value: number;
}

export class Question {
	id: number;
	question: string;
	options: Option[];
	type: string;
}
//Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism

export const questions: Question[] = [
	
	{ id: 0, question: 'I feel like I\'m on an emotional roller coaster.', 
		options: [{text: "Almost Always", value: 1}, {text: "Quite often", value: 0.75}, {text: "Sometimes", value: 0.5}, {text: "Rarely", value: 0.25}, {text: "Almost never", value: 0}], type: 'N'
	},
	{ id: 1, question: 'I am a private person.', 
		options: [{text: "Strongly agree", value: 0}, {text: "Agree", value: 0.25}, {text: "Somewhat", value: 0.5}, {text: "Disagree", value: 0.75}, {text: "Strongly Disagree", value: 1}], type: 'E'
	},
	{ id: 2, question: 'I _______ lose my temper.', 
		options: [{text: "Almost Always", value: 0}, {text: "Quite often", value: 0.25}, {text: "Sometimes", value: 0.5}, {text: "Rarely", value: 0.75}, {text: "Almost never", value: 1}], type: 'A'
	},
	{ id: 3, question: 'I feel uneasy in situations where I am expected to display physical affection.', 
		options: [{text: "Almost Always", value: 1}, {text: "Quite often", value: 0.75}, {text: "Sometimes", value: 0.5}, {text: "Rarely", value: 0.25}, {text: "Almost never", value: 0}], type: 'N'
	},
	{ id: 4, question: 'I have a broad range of interests and hobbies.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'O'
	},
	{ id: 5, question: 'I procrastinate on matters relevant to work.', 
		options: [{text: "Almost Always", value: 0}, {text: "Quite often", value: 0.25}, {text: "Sometimes", value: 0.5}, {text: "Rarely", value: 0.75}, {text: "Almost never", value: 1}], type: 'C'
	},
	{ id: 6, question: 'I pride myself on being different.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'O'
	},
	{ id: 7, question: 'I can calm myself down when I\'m under stress.', 
		options: [{text: "Almost Always", value: 0}, {text: "Quite often", value: 0.25}, {text: "Sometimes", value: 0.5}, {text: "Rarely", value: 0.75}, {text: "Almost never", value: 1}], type: 'N'
	},
	{ id: 8, question: 'I need someone to tell me that I have done a good job in order to feel good about my work.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree - A little gratitude goes a long way", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree - I know if I have done a good job", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'A'
	},
	{ id: 9, question: 'I like to attend gatherings where I can meet new people.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'O'
	},
	{ id: 10, question: 'When I meet someone new, it doesn\'t take me long to tell him/her a lot about myself.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'E'
	},
	{ id: 11, question: 'During tough times, I am more prone to unhealthy behaviors (abusing drugs or alcohol, eating unhealthy foods, getting less sleep).', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'N'
	},
	{ id: 12, question: 'When I\'m really sad or down, I seek the company of others.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'E'
	},
	{ id: 13, question: 'I enjoy exploring new places.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'O'
	},
	{ id: 14, question: 'I break promises.', 
		options: [{text: "Almost Always", value: 0}, {text: "Quite often", value: 0.25}, {text: "Sometimes", value: 0.5}, {text: "Rarely", value: 0.75}, {text: "Almost never", value: 1}], type: 'C'
	},
	{ id: 15, question: 'I present myself in ways that are very different from who I really am.', 
		options: [{text: "Almost Always", value: 1}, {text: "Quite often", value: 0.75}, {text: "Sometimes", value: 0.5}, {text: "Rarely", value: 0.25}, {text: "Almost never", value: 0}], type: 'N'
	},
	{ id: 16, question: 'I am good at thinking "outside the box".', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'O'
	},
	{ id: 17, question: 'I often forget to put things back in their proper place.', 
		options: [{text: "Strongly agree", value: 0}, {text: "Agree", value: 0.25}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.75}, {text: "Strongly disagree", value: 1}], type: 'C'
	},
	{ id: 18, question: 'It’s my way or the highway.', 
		options: [{text: "Strongly agree", value: 0}, {text: "Agree", value: 0.25}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.75}, {text: "Strongly disagree", value: 1}], type: 'A'
	},
	{ id: 19, question: 'If you were seated on a crowded bus and noticed an elderly person standing, would you give up your place?', 
		options: [{text: "Of course", value: 1}, {text: "Probably", value: 0.75}, {text: "It would depend on how tired I was", value: 0.5}, {text: "Probably not", value: 0.25}, {text: "It wouldn't even occur to me", value: 0}], type: 'C'
	},
	{ id: 20, question: 'I am easily distracted.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'E'
	},
	{ id: 21, question: 'I am able to motivate myself to complete unpleasant but necessary tasks.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'C'
	},
	{ id: 22, question: 'When I get angry, I have ________ self-control.', 
		options: [{text: "Excellent", value: 1}, {text: "Very good", value: 0.75}, {text: "Good", value: 0.5}, {text: "Little", value: 0.25}, {text: "No", value: 0}], type: 'A'
	},
	{ id: 23, question: 'Interaction with other people is...', 
		options: [{text: "What life is all about", value: 1}, {text: "Fun, but not all the time", value: 0.75}, {text: "Great on special occasions", value: 0.5}, {text: "A necessary evil", value: 0}], type: 'E'
	},
	{ id: 24, question: 'Most people are trustworthy.', 
		options: [{text: "Strongly agree", value: 1}, {text: "Agree", value: 0.75}, {text: "Neither agree nor disagree", value: 0.5}, {text: "Disagree", value: 0.25}, {text: "Strongly disagree", value: 0}], type: 'A'
	}
]; 

	
 		