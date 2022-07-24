import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { AttemptQuizService } from '../../service/attempt-quiz.service';
import { ViewMultimediaComponent } from './view-multimedia/view-multimedia.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.scss']
})
export class AttemptQuizComponent implements OnInit {
 sliceVal:number=0;
  quizMetaData:any={  "id":"", 
 sliceVal:this.sliceVal}
 quizSet:any;
 response:any={};
 quizInfo:any={};
 enableQuizSubmit:Boolean=false;
 minutes=0;
 seconds=0;
 remainSeconds=0
 questionId:any=[]
 responses:any=[]
 quizId:any={}
 finalResponse:any={}


  constructor(private quizService:AttemptQuizService,
    private dialog:MatDialog,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
  this.getQuizInfo()
  this.getQuizSet();

  
  
  }
  
  timer()
  {
    this.minutes=this.quizInfo?.time
  
   this.seconds=this.minutes*60
  this.remainSeconds=0;
  const intervalId = setInterval(() => {
    this.seconds = this.seconds - 1;
    this.minutes=Math.floor(this.seconds/60);
    this.remainSeconds=this.seconds%60;
    // console.log(this.seconds)
    if(this.seconds === 0){ clearInterval(intervalId) ; }
}, 1000)

}


  getQuizInfo(){
    
    const quizID=localStorage.getItem('quizID') 
    this.quizMetaData.id=quizID
    this.quizService.getQuizTime(quizID!).subscribe((res:any)=>{
      console.log(this.quizInfo,'timerere')
      this.quizInfo=res
     this.timer()
    })
  }
  getQuizSet(){
    const quizID=localStorage.getItem('quizID')
    this.quizMetaData.id=quizID
    if(this.quizInfo.noOfQuestions!=this.sliceVal){
      
    
    this.quizService.getQuizSet(this.quizMetaData).subscribe((res:any)=>{
      this.quizSet=res.data[0]
      console.log('quizset',this.quizSet)

      this.questionId.push(this.quizSet._id)
      console.log('questionId---',this.questionId)

      this.quizMetaData.sliceVal=++this.sliceVal
      console.log(this.sliceVal,this.quizInfo.noOfQuestions,'[[[[[[[')
      // console.log(this.quizSet)
    })
  }
  else{
    this.enableQuizSubmit=true
  }
    
  }
  viewMultiMedia(){
    
    this.dialog.open(ViewMultimediaComponent,{data:{image:this.quizSet.image}})
  }


  saveResponse()
  {
    this.responses.push(this.response)
    console.log('response',this.responses)
    this.response={}
    
  }

  submitResponse(){
    this.responses.forEach((element:any,i:any)=>element.questionId=this.questionId[i])
    // console.log('final submit',this.responses)

    this.finalResponse.teamsId=this.route.snapshot.paramMap.get('teamsId')
    this.finalResponse.teamId=this.route.snapshot.paramMap.get('teamId')
    this.finalResponse.quizId=this.route.snapshot.paramMap.get('quizId')
    this.finalResponse.responses = this.responses
    console.log('final responsew ',this.finalResponse)

    this.quizService.submitResponse(this.finalResponse).subscribe((res:any)=>{
      console.log('response save in backend',res)
    })
  }


  
  
}
