import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.scss']
})
export class QuizInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private router:Router) { }
 
  // noOfquesitons=this.data.questions.length
  // noOfquesitons=this.data.noOfQuesitons
  organizerName=this.data.organizerName
  
  eventName=this.data.eventName
  
  ngOnInit(): void {
    const organizerName:any=this.data.organizerName
    const eventName:any=this.data.eventName
   
    localStorage.setItem('organizerName',organizerName)
    localStorage.setItem('eventName',eventName)
    localStorage.setItem('noOfQuestions', this.data.noOfQuestions)
    console.log(localStorage.getItem('id')," received from local storage")

  }
  startQuiz(){
    this.data.dialog.closeAll()
    // document.cookie.'name'=this.data._id

    this.router.navigate(['/start-quiz'],
    )

  }

}
