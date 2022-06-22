import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerModel:any={}

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
  
  }
  register(){
    this.quizService.register(this.registerModel).subscribe((res:any)=>{
      Swal.fire('User Registered')
    },(err:any)=>{
      Swal.fire('user failed to register')
    })
  }

}
