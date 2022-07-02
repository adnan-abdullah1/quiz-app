import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
  quizInfo:Boolean=true; // for toggling section on html page
  quizModel:any={}
  optionModel:any={};
  question!:string;
  questionType!:string;
  questionBank:any=[]
  
  constructor(private readonly adminService:AdminService) { }

  ngOnInit(): void {

  }
next(){
  this.quizInfo=false;
}
submit(){
  
  this.questionBank.push({
    "questionType":this.questionType,
    "question":this.question,
   
    "rightAnswer":this.questionBank.rightAnswer
  })
  this.questionBank.push({ "options":Object.values(this.optionModel)})
  this.quizModel.questionBank=this.questionBank
this.adminService.addQuiz(this.quizModel).subscribe((res:any)=>{
  console.log(res)
})
  
}
}
