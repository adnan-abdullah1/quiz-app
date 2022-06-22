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
 
  constructor( private quizService:QuizService) { }
  
  ngOnInit(): void {
    
  this.getQuizSet(false)
  }
getQuizSet(previousQuesion:Boolean){
  const organizerName=localStorage.getItem('organizerName')
    const eventName=localStorage.getItem('eventName')
    
    if(previousQuesion && this.skip!=0){
      this.skip-=1
    }
    else if (!previousQuesion && this.skip!=2){
      console.log('fired')
      this.skip+=1;
    }
    // else {
    //   this.skip=0
    // }
   
    const requestedQuiz={"organizerName":organizerName,"eventName":eventName,"skip":this.skip}
    console.log(this.skip)
  this.quizService.getQuizSet(requestedQuiz).subscribe((res:any)=>{
    
    this.quizSet=res.data
    
    
  
    })}
    
      
    
}
