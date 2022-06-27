import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-attempt',
  templateUrl: './quiz-attempt.component.html',
  styleUrls: ['./quiz-attempt.component.scss']
})
export class QuizAttemptComponent implements OnInit {
  quizSet:any={}
  skip:number=-1
 
  response:any={chosenOption:''}
  submitButton:Boolean=false
  result:any;
   organizerName=localStorage.getItem('organizerName');
   eventName=localStorage.getItem('eventName');
   userID=localStorage.getItem('userID')

  constructor( private quizService:QuizService,
    private router:Router) { }
  
  ngOnInit(): void {
   
  this.getQuizSet()
  
  }
getQuizSet(){
  
  

   
    const noOfQuesitons:any=localStorage.getItem('noOfQuestions')
    this.response.questionID=this.quizSet[0]?._id;
    this.response.userID=this.userID
    this.response.organizerName=this.organizerName;
    this.response.eventName=this.eventName;
    
    if(this.skip<parseInt(noOfQuesitons)-1)
    {
      
      this.skip++;
      console.log(true,this.skip)
    }
    else{
      this.submitButton=true
    }
  //  else{
  //   console.log('else')
  //   this.skip=0;
  //  }
   
    const requestedQuiz={"organizerName":this.organizerName,"eventName":this.eventName,"skip":this.skip}
   console.log(this.response,'response ..')
  this.quizService.getQuizSet(requestedQuiz,this.response).subscribe((res:any)=>{
    console.log(this.quizSet,'quizSet')
    this.quizSet=res.data
    this.response={}
    
    
  
    })}

    submitResponse(){
      const resultCred={
        "userID": this.userID,
        "eventName": this.eventName,
        "organizerName": this.organizerName
      }
      
      this.quizService.getResult(resultCred).subscribe((res:any)=>{
        console.log(res,'questions')
        const score=res.score;
        const totalQuestions=res.totalQuestions
        const passPercentage=Math.round((score/totalQuestions)*100)
        Swal.fire(`scored ${score} out of ${totalQuestions} questions,
         total obtained percentage is ${passPercentage}%`)
        this.router.navigate(['quiz-list'])
      },(err)=>{
        Swal.fire(err)
      })}
  
      
    
}
