import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-quiz-attempt',
  templateUrl: './quiz-attempt.component.html',
  styleUrls: ['./quiz-attempt.component.scss']
})
export class QuizAttemptComponent implements OnInit {
  quizSet:any
  skip:number=0
  noOfQuestions:Number= 0
  response:any={chosenOption:''}
 
  constructor( private quizService:QuizService,) { }
  
  ngOnInit(): void {
   
  this.getQuizSet()
  
  }
getQuizSet(){
  
  

  const organizerName=localStorage.getItem('organizerName');
    const eventName=localStorage.getItem('eventName');
    const userID=localStorage.getItem('userID')
    this.response.questionID=this.quizSet?._id;
    this.response.userID=userID
    this.response.organizerName=organizerName;
    this.response.eventName=eventName;
    console.log('respone ',this.response)
    if(this.skip!=2){
      this.skip++;
    }
    // else {
    //   // this.skip=0;
    // }
    
    
   
    const requestedQuiz={"organizerName":organizerName,"eventName":eventName,"skip":this.skip}
  
  this.quizService.getQuizSet(requestedQuiz,this.response).subscribe((res:any)=>{
    
    this.quizSet=res.data
    this.response={}
    
    
  
    })}
  
      
    
}
