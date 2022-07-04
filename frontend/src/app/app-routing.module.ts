import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from './admin/components/add-quiz/add-quiz.component';
import { HomeComponent } from './home/components/home.component';

const routes: Routes = [
  {path:'admin/add-quiz',component:AddQuizComponent},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
