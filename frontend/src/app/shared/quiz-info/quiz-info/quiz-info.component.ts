import { Component, Inject, OnInit } from '@angular/core';
// import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { QuizInfoService } from '../../service/quiz-info.service';


@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.scss']
})
export class QuizInfoComponent implements OnInit {
  authModel:any={};
  quizId:any={}
teamData:any={}
teamsId:any={}
teamId:any={}
  constructor(private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private quizInfoService:QuizInfoService, private router:Router
    ) { }
    quiz=this.data.quiz
    
  ngOnInit(): void {
   console.log(this.quiz,'got quiz')
   console.log('matdata-----',this.data)
   this.quizId=localStorage.getItem('quizId')
 
 
   
  }
  close(){
    this.dialog.closeAll()
  }
  validate(){
    this.findTeam()
    this.authModel.quizID=this.quiz._id
    // this.router.navigate(['/play-quiz',this.data._id,res._id,res?.teams[0]?._id])

    this.quizInfoService.validate(this.authModel).subscribe((res:any)=>{
      
      this.teamId=res.teamId
      localStorage.setItem('quizID',res.quizID)
      this.router.navigate(['attempt-quiz',res.quizID,this.teamsId,this.teamId])
      this.dialog.closeAll()
    },(err:any)=>{
     console.log(err)
      Swal.fire(`${err.error.message}`)
    })
  }

//   findTeams(){
//    this.quizInfoService.findTeams(this.quizId).subscribe((res:any)=>{
//         console.log('teaminfo------',res)
//         this.teamData=res
//         this.teamsId= res._id
//    })
//  }

 findTeam(){
  this.quizInfoService.findTeam(this.quizId,this.authModel).subscribe((res:any)=>{
    console.log('findt team ---',res)
    this.teamsId=res[0]._id;
    this.teamId=res[0].teamInfo[0]._id  
  })
 }

 
}
