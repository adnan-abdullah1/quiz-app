import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from './admin/components/add-quiz/add-quiz.component';
AddQuizComponent
const routes: Routes = [
  {path:'admin/add-quiz',component:AddQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
