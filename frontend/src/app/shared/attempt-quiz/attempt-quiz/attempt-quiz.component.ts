import { Component, OnInit } from '@angular/core';
import { AttemptQuizService } from '../../service/attempt-quiz.service';
@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.scss']
})
export class AttemptQuizComponent implements OnInit {
 sliceVal:number=0;
  quizMetaData:any={  "_id":"62c68b3377e5324fb7d2bcdc",
 sliceVal:this.sliceVal}
 quizSet:any;
 response:any;
 quizInfo:any={};
 minutes=0;
 seconds=0;
 remainSeconds=0
  constructor(private quizService:AttemptQuizService) { }
  
  ngOnInit(): void {
  this.getQuizInfo()
  this.getQuizSet();
  
  
  }
  
  timer()
  {
    this.minutes=this.quizInfo.time
  
   this.seconds=this.minutes*60
  this.remainSeconds=0;
  const intervalId = setInterval(() => {
    this.seconds = this.seconds - 1;
    this.minutes=Math.floor(this.seconds/60);
    this.remainSeconds=this.seconds%60;
    console.log(this.seconds)
    if(this.seconds === 0){ clearInterval(intervalId) ; }
}, 1000)

}


  getQuizInfo(){
    this.quizService.getQuizTime('62c68b3377e5324fb7d2bcdc').subscribe((res:any)=>{
      this.quizInfo=res
     this.timer()
    })
  }
  getQuizSet(){
    if(this.quizInfo.noOfQuestions>this.sliceVal){
      
    }
    this.quizService.getQuizSet(this.quizMetaData).subscribe((res:any)=>{
      this.quizSet=res.data[0]
      this.quizMetaData.sliceVal=++this.sliceVal
      console.log(this.quizSet)
    })
  }
}
