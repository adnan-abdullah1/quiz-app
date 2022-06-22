import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import {QuizListComponent} from './shared/quiz-list/quiz-list.component'
import { QuizAttemptComponent } from './shared/quiz-attempt/quiz-attempt.component';
const routes: Routes = [
  {path:'quiz-list',component:QuizListComponent},
  {path:'start-quiz',component:AuthComponent},
  {path:'attempt-quiz',component:QuizAttemptComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
