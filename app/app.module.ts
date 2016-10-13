import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';

import { QuestionComponent } from './question.component';
import { ResultsComponent } from './results.component';

import { QuestionService } from './question.service';
import { ResultsService } from './results.service';
import { SavedTestsService } from './saved-tests.service';

import { routing } from './app.routing';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	routing
  ],
  declarations: [ AppComponent, DashboardComponent, QuestionComponent, ResultsComponent],
  bootstrap: [ AppComponent ],
  providers: [QuestionService, ResultsService, SavedTestsService]
})

export class AppModule { }
