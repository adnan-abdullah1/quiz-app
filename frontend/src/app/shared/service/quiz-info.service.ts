import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizInfoService {
  quiz:any={}
  serverUrl=environment.serverURL
  quizID!:string;
  constructor(private http:HttpClient) { }

  validate(authModel:any){
    console.log(authModel,authModel)
   const res=this.http.post(`${this.serverUrl}auth/validate`,authModel)
  //  .pipe(tap(
  //   ()=>{console.log(res.quizID),'in service '},
    
  //  )) 
   return res
  }
  // findTeams(data:any){
  
  //   this.quiz.quizId=data
   
  //   return this.http.post(`http://localhost:3000/teams/teams-info`,this.quiz)
  // }

  findTeam(data:any,authModel:any){
      this.quiz.quizId=data;
      this.quiz.teamName=authModel.teamName
      return this.http.post(`http://localhost:3000/teams/team-info`,this.quiz)
    
  }

  
}
