import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private quizService:QuizService) { }
  isAdmin:any=localStorage.getItem('isAdmin');
  isLoggedIn:any=localStorage.getItem('isLoggedIn')
  quizs:any;
  ngOnInit(): void {
  console.log(this.isAdmin)
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/quiz-list'])
  }
  editQuizs(){
    
    this.router.navigate(['/admin/manage-quizs'])
  
  }
  login(){
    this.router.navigate(['/login'])
  }
}
