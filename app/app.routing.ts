import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard.component';
import { QuestionComponent }      from './question.component';
import { ResultsComponent }      from './results.component';

const appRoutes: Routes = [
  {
  	path: 'dashboard',
  	component: DashboardComponent
  },
  {
  	path: 'question/:id',
  	component: QuestionComponent
  },
  {
  	path: 'results',
  	component: ResultsComponent
  },
  {
  	path: '',
  	redirectTo: '/dashboard',
  	pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);