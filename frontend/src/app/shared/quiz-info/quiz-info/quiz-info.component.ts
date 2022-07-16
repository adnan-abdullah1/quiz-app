import { Component, Inject, OnInit } from '@angular/core';
// import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

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
  constructor(private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private quizInfoService:QuizInfoService
    ) { }
    quiz=this.data.quiz
  ngOnInit(): void {
   console.log(this.quiz,'got quiz')
  }
  close(){
    this.dialog.closeAll()
  }
  validate(){
    this.quizInfoService.validate(this.authModel).subscribe((res:any)=>{

    },(err:any)=>{
      Swal.fire(err)
    })
  }
}
