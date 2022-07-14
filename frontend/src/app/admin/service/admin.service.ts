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

  getAllUsers(){
    return this.http.get(`${this.serverUrl}admin/all-users`)
  }
}
