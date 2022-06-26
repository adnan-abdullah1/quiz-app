import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';
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
     console.log(res.user.isAdmin,'log che')
      localStorage.setItem('userID',res.user._id)
      localStorage.setItem('isLoggedIn','yes')
      localStorage.setItem('isAdmin',res.user.isAdmin)
   
      Swal.fire('logged In')
      this.router.navigate(['attempt-quiz'])
      
    },(err:any)=>{
    
      swal.fire('Auth failed')
    })
    
  }

}
