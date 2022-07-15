import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HomeService } from 'src/app/home/service/home.service';
import Swal from 'sweetalert2';
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
  userNameList:string[]=[];
  allSchools:string[]=[];
  allClass:string[]=[];
  chosenSchool!:string;
  constructor(private homeService:HomeService,
    private readonly adminService:AdminService) { }

  ngOnInit(): void {
    this.getAllQuizs()
    this.getAllUsers()
    this.getSchools()
    console.log(this.chosenSchool)
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
          this.userNameList.push(user.firstName+" "+user.lastName)
        })
      })
  }
  getSchools(){
    this.adminService.getSchools().subscribe((res:any)=>{
      res.forEach((school:any)=>{
        this.allSchools.push(school._id.schoolName)
        
      })
      
  
    })
  }
  getClass(){
    this.allClass=[]
    this.adminService.getClass(this.chosenSchool).subscribe((res:any)=>{
    
      res.forEach((classObj:any)=>{

        this.allClass.push(classObj.class)
      })
      console.log(this.allClass,'allclass')
      res=""
    },(err:any)=>Swal.fire(err))
  }

 
}
