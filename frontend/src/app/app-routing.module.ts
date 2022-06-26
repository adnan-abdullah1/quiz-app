import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import {QuizListComponent} from './shared/quiz-list/quiz-list.component'
import { QuizAttemptComponent } from './shared/quiz-attempt/quiz-attempt.component';
import { AddQuizComponent } from './admin/add-quiz/add-quiz.component';
import { ManageQuizsComponent } from './admin/manage-quizs/manage-quizs.component';

const routes: Routes = [
  {path:'quiz-list',component:QuizListComponent},
  {path:'login',component:AuthComponent},
  {path:'attempt-quiz',component:QuizAttemptComponent},
  {path:'admin/add-quiz',component:AddQuizComponent},
  {path:'admin/manage-quizs',component:ManageQuizsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
