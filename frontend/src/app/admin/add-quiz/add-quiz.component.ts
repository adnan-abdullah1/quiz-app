import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
  quizSet:any={};
  quizInfo:Boolean=false
  rightAnswer:string='';
  optionModel:any={};
  questionCount:number=0;
  // option=Object.values(this.optionModel)
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
 
  }
next(){


  this.quizInfo=true
  
}
submit(){
  
    if(this.questionCount<=this.quizSet.noOfQuestions){
     this.quizSet.options=Object.values(this.optionModel)
     this.quizService.addQuiz(this.quizSet).subscribe((res:any)=>{
      console.log(res,'res')
      this.quizSet.options=[]
      this.quizSet.rightAnswer='';
      this.optionModel={}
      
     })
     console.log(this.quizSet)
     this.questionCount++;
}
else{
  console.log('else')
  Swal.fire('uploaded all questions')
}
}
}


