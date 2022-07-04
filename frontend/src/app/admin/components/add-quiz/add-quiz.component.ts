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
  encodedImage?:any;
  constructor(private readonly adminService:AdminService,
    private readonly toastr:ToastrService) { }

  ngOnInit(): void {}
  next(){
    this.quizInfo=false;
  }

  // manual validation :::::::::
  //::::::::::::::::::::::::::::::
  
  validateOptions(optionModel:any){
    const rawOptions=Object.values(optionModel)
    if(rawOptions.length<4){ throw new Error("No Option Can Be Left Empty")}
    let optionArr:string[]=[];
 
    let optionSet=new Set()
    let isValidOption:Boolean=true;
    //remove space from options to
    rawOptions.forEach((option:any)=>{
      optionArr.push(option.replaceAll(" ","")
      )
    })
 
    optionArr.forEach((option:any)=>{
      if(optionSet.has(option)) throw new Error("Options cant be same")
      else optionSet.add(option)
    })
    //validation functins Ends here:::::::::::::
    // ::::::::::::::::::::::::::::::::::::::::::::
  }
  submit(){
    try{
      this.validateOptions(this.optionModel)
    }
    catch(err:any){

      Swal.fire(`${err}`)
      return
    }
    
    console.log(this.questionType,'////')
    this.totalNoOfQuestions=this.quizModel?.noOfQuestions;
    if(this.noOfQuestionAdded<=this.totalNoOfQuestions)
    {
      this.noOfQuestionAdded++;
      this.questionBank.push({
        "questionType":this.questionType,
        "question":this.question,
        "image":this.encodedImage,
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

  //image to base 64 conversion
  getBase64 = (file: any) => new Promise(function (resolve: any, reject: any) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error: any) => reject('Error:', error);
  })



  changeProfileImg = (e: any) => {
    
  const file:any = e.target.files[0]
  let encoded;
  this.getBase64(file)
    .then((result) => {
      this.encodedImage = result;
      //this.AddModel.image.push(result)
      console.log(result)
      //  this.UserModel.profilePicture=result;
      
    })
    .catch(e => console.log(e))

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
