import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-quizs',
  templateUrl: './manage-quizs.component.html',
  styleUrls: ['./manage-quizs.component.scss']
})
export class ManageQuizsComponent implements OnInit {
  quizs:any;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.getAllQuizs()
  }
getAllQuizs(){
  this.quizService.getAllQuizs().subscribe((res:any)=>{
    this.quizs=res.data
  },(err:any)=>{
    Swal.fire(err)
  })
}
}
