import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div id="main-container" class="container">
	<div class="row">
	   	<div class="col-xs-12">
			<h1>{{title}}</h1>
		    <nav>
		     <a routerLink="/dashboard" routerLinkActive="active">Home</a>
		   </nav>
	   </div>
   </div>
   	<div class="row">
	   	<div class="col-xs-12">
	   		<router-outlet></router-outlet>
	   	</div>
   	</div>

   </div>
	`,
	moduleId: module.id,
	styleUrls: ['app.component.css']
})

export class AppComponent {
	title = 'Biscuit Quiz';
}