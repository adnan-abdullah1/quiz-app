import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AttemptQuizService {

  constructor(private http:HttpClient) { }
  getQuizSet(quizMetaData:any){
    return this.http.post(`http://localhost:3000/quiz/quiz-set`,quizMetaData)
  }
  getQuizTime(id:String){
    return this.http.get(`http://localhost:3000/quiz/get-quiz-info/${id}`)
  }
}
