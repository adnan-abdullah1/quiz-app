import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HomeService } from 'src/app/home/service/home.service';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  allUsers:any;
  allQuizs:any;
  emails = new FormControl('');
  emailList: string[]=[];
  constructor(private homeService:HomeService,
    private readonly adminService:AdminService) { }

  ngOnInit(): void {
    this.getAllQuizs()
    this.getAllUsers()
  }
  getAllQuizs(){
    this.homeService.home().subscribe((res:any)=>{
      this.allQuizs=res
      console.log(this.allQuizs)
    })
  }
  getAllUsers(){
      this.adminService.getAllUsers().subscribe((res:any)=>{
        this.allUsers=res.users;
        console.log(this.allUsers,'all users')
        this.allUsers.forEach((user:any)=>{
          this.emailList.push(user.email)
          
        })
      })
  }
}
