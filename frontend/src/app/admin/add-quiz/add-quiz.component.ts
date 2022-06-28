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
  optionsFilled:any=false;
  // option=Object.values(this.optionModel)
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
 
  }
  
next(){
  const validatedResults:any=[]
  const quizSet=this.quizSet;
  validatedResults.push(quizSet.organizerName?.replaceAll(" ","").length>=2?true:false);
  validatedResults.push(quizSet.eventName?.replaceAll(" ","").length>=2?true:false);
  validatedResults.push(quizSet.noOfQuestions && quizSet.noOfQuestions >0?true:false);
  validatedResults.push(quizSet.time && quizSet.time >0 ?true:false);
  
  if(validatedResults.every((val:Boolean)=>val==true)){
    this.quizInfo=true;
    
  }
  else{
    Swal.fire('enter proper data')
    
  }


  
}
validate(question:any){
  const validatedResult:any=[]
  if(!question || !this.optionModel || !this.quizSet.rightAnswer ) return false;

 validatedResult.push(question.replaceAll(' ','').length>10?true:false);
Object.values(this.optionModel)
let duplicateOptions=new Set()

const option1=this.optionModel?.option1?.replaceAll(' ','')
const option2=this.optionModel?.option2?.replaceAll(' ','')
const option3=this.optionModel?.option3?.replaceAll(' ','')
const option4=this.optionModel?.option4?.replaceAll(' ','')
// if(duplicateOptions.has(option1)){ return false;}
// else duplicateOptions.add(option1)
 validatedResult.push(option1.length>0?true:false)
 validatedResult.push(option2.length>0?true:false)
 validatedResult.push(option3.length>0?true:false)
 validatedResult.push(option4.length>0?true:false)
 validatedResult.push(this.quizSet?.rightAnswer?.replaceAll(' ','').length>0?true:false)


 console.log(this.optionModel,validatedResult,'vald res')
  if(validatedResult.every((val:Boolean)=> val==true)){
    return true;
  }
return false;
}
submit(){
    if(!(this.validate(this.quizSet?.question))){
      
      Swal.fire('enter proper data')
     return 
    }
    
    if(this.questionCount<=this.quizSet.noOfQuestions){
     this.quizSet.options=Object.values(this.optionModel)
     this.quizService.addQuiz(this.quizSet).subscribe((res:any)=>{
      console.log(res,'res')
      this.quizSet.options=[]
      this.quizSet.question=''
      this.quizSet.rightAnswer='';
      this.optionModel={};
      
      
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


