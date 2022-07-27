import {AfterViewInit,ViewChild, Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HomeService } from 'src/app/home/service/home.service';
import Swal from 'sweetalert2';
import { AdminService } from '../../service/admin.service';
//table::::::::::::::
export interface PeriodicElements{
  quiz_name:string;
  // position:number;
  quiz_organizer:number;
  symbol:string
}

//table ends :::::::::::::::::::::::
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allQuizs={};
  quizarr:any=[]
  dataSource:any;
  changeLiveStatus:Boolean=false;
  Element_Data=[]
  constructor(private readonly homeService:HomeService,
    private adminService:AdminService) { }
  ngOnInit(): void {
    this.getAllQuizs();
  }
  //:table
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns=[ 'quiz-name', 'quiz-organizer', 'demo-symbol'];
  
  
//table ends :::::::::::::::::::::::
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
shuffle() {
  let currentIndex = this.displayedColumns.length;
  while (0 !== currentIndex) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap
    let temp = this.displayedColumns[currentIndex];
    this.displayedColumns[currentIndex] = this.displayedColumns[randomIndex];
    this.displayedColumns[randomIndex] = temp;
  }
}

 getAllQuizs(){
  this.homeService.home().subscribe((res:any)=>{
    this.allQuizs=res;
    // let quizarr=[]
    let quizObj:any={}
    res.forEach((quiz:any)=>{
      console.log(quiz.eventName,'eventname ')
      quizObj.eventName=quiz.eventName;
      quizObj.organizerName=quiz.organizerName
      quizObj.quizID=quiz._id
      quizObj.isQuizLive=quiz.isQuizLive
      this.quizarr.push(quizObj)
      quizObj={}
    })
      this.Element_Data=this.quizarr
     this.dataSource = new MatTableDataSource<PeriodicElements>(this.Element_Data);
     this.dataSource.paginator = this.paginator;
     
   

    
  })
 }
  makeLive(quizID:string){
    // this.changeLiveStatus=!this.changeLiveStatus
    this.adminService.makeLive(quizID).subscribe((res:any)=>{

    },(err:any)=>{
      console.log(err)
      Swal.fire(`${err.message}`)
    })
 }
}
