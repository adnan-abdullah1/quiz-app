import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allQuizs:any;
  constructor(private readonly homeService:HomeService) { }

  ngOnInit(): void {
    this.home()
  }
home(){
  this.homeService.home().subscribe((res:any)=>{
    this.allQuizs=res;
    console.log(res)
  })
}
}
