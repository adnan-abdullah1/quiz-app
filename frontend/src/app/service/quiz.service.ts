import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
 
  constructor(private http:HttpClient) { }
  getAllQuizs(){
    console.log('get all quiz in service')
    return this.http.get('http://localhost:3000/quiz/all-quizs')
    // quiz/all-quizs
    
  }
  getQuizSet(requestedQuiz:any,response:any){
    const data={"requestedQuiz":requestedQuiz,"response":response}
    return this.http.post(`http://localhost:3000/quiz/quiz-set`,data)
  }
  login(authModel:any){
     return this.http.post('http://localhost:3000/auth/login',authModel)
      
    }
  register(registerModel:any){
    return this.http.post('http://localhost:3000/auth/register',registerModel)
  }
  getResult(resultCred:any){
   return this.http.post('http://localhost:3000/quiz/get-quiz-result',resultCred)

  }
  addQuiz(quizModel:any){
    return this.http.post('http://localhost:3000/admin/add-quiz',quizModel)
  }
}
