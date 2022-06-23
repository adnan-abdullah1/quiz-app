import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import { QuizService } from 'src/app/service/quiz.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authModel:any={}

  constructor(private router:Router, private quizService:QuizService) { }

  ngOnInit(): void {
  }
  login(){

    this.quizService.login(this.authModel).subscribe((res:any)=>{
     
      localStorage.setItem('userID',res.user._id)
      this.router.navigate(['attempt-quiz'])
    },(err:any)=>{
    
      swal.fire('Auth failed')
    })
    
  }

}
