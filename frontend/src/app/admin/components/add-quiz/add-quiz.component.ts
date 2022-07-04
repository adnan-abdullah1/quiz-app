import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
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
  totalNoOfQuestions!:number; // will let admin only add questions upto the limit he set
  noOfQuestionAdded:number=0;// keeps track how many questions user added
  enablePreview:Boolean=false; //will enable preview and final submit when admin added all questions
  constructor(private readonly adminService:AdminService,
    private readonly toastr:ToastrService) { }

  ngOnInit(): void {

  }
next(){
  this.quizInfo=false;
  
}
submit(){
  console.log(this.questionType,'////')
  this.totalNoOfQuestions=this.quizModel?.noOfQuestions;
  if(this.noOfQuestionAdded<=this.totalNoOfQuestions)
  {
    this.noOfQuestionAdded++;
    this.questionBank.push({
      "questionType":this.questionType,
      "question":this.question,
      "rightAnswer":this.questionBank.rightAnswer
    })
      this.questionBank.push({ "options":Object.values(this.optionModel)})
      this.quizModel.questionBank=this.questionBank

      this.toastr.info(`${this.noOfQuestionAdded} Questions Added`)
      if(this.noOfQuestionAdded>=this.totalNoOfQuestions){
        Swal.fire('you have added all question\n if you want to preview')
        this.enablePreview=true;
      }

      }
   
}

finalSubmit(){
  this.adminService.addQuiz(this.quizModel).subscribe((res:any)=>{
    this.toastr.success(` Quiz fully Added`);
   },
   (err:any)=>this.toastr.error(err),
 ()=>{})
}

preview(){

}



}
