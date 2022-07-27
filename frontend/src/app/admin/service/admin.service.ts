// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverUrl=environment.serverURL
  constructor(private http:HttpClient) { }
  addQuiz(quizModel:any){
  return this.http.post(`${this.serverUrl}admin/add-quiz`,quizModel)
  }


  getSchools(){
    return this.http.get(`${this.serverUrl}teams/all-schools`)
  }
  getClass(schoolName:string){
    return this.http.get(`${this.serverUrl}teams/all-class/${schoolName}`)
  }
  getAllUsers(chosenSchool:string,chosenClass:string){
   
    return this.http.get(`${this.serverUrl}admin/all-users/${chosenSchool}/${chosenClass}`)
  }

  finalSubmitTeams(teamModel:any){
    console.log(teamModel,'teammodel')
    return this.http.post(`${this.serverUrl}teams/add-team`,teamModel)
  }

  makeLive(quizID:string){
    return this.http.put(`${this.serverUrl}admin/make-quiz-live/${quizID}`,{})
  }
}
