import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../service/quiz.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {QuizInfoComponent} from '../quiz-info/quiz-info.component'
@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizList:any;

  constructor(private QuizService:QuizService,private dialog:MatDialog) { }

  ngOnInit(): void {
    // localStorage.clear()
    this.getAllQuizs();
    
    }

     getAllQuizs(){
      this.QuizService.getAllQuizs().subscribe((res:any)=>{
       
        this.quizList=res.data
       
        console.log(this.quizList,'in list')
      },(error:any)=>{
        console.log(error)
      })
  }
  quizInfo(quizIndex:any){
    console.log(quizIndex)
  let quizDetails=this.quizList[quizIndex]._id
  console.log('quiz details for dialog ',quizDetails)
   quizDetails.dialog=this.dialog
    this.dialog.open(QuizInfoComponent,{
      data:quizDetails,
    
     
    })

    
      

    
    
  }

}
