import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { MatDialog } from '@angular/material/dialog';
import { QuizInfoComponent } from 'src/app/shared/quiz-info/quiz-info/quiz-info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allQuizs:any;
  constructor(private readonly homeService:HomeService,
    private dialog:MatDialog ) { }

  ngOnInit(): void {
    localStorage.removeItem('quizID')
    this.home()
  }
home(){
  this.homeService.home().subscribe((res:any)=>{
    this.allQuizs=res;
    console.log(res)
  })
}
  quizInfo(quiz:any){
    console.log(quiz,'quiz is here')
    this.dialog.open(QuizInfoComponent,{data:{"quiz":quiz}})
  }
}
