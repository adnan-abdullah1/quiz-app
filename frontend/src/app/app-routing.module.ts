import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from './admin/components/add-quiz/add-quiz.component';
import { AddTeamComponent } from './admin/components/add-team/add-team.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { HomeComponent } from './home/components/home.component';
import { AttemptQuizComponent } from './shared/attempt-quiz/attempt-quiz/attempt-quiz.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'',component:HomeComponent},
  {path:'admin/add-quiz',component:AddQuizComponent},
  {path:'admin/dashboard',component:DashboardComponent},
  {path:'admin/add-team',component:AddTeamComponent},
  {path:'atuhenticate',component:AuthComponent},
  {path:'attempt-quiz',component:AttemptQuizComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
