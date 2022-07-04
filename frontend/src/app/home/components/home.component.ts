import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeData=null;
  constructor(private readonly homeService:HomeService) { }

  ngOnInit(): void {
   setTimeout(()=>{
    this.home()
   },1000)
  }
home(){
  this.homeService.home().subscribe((res:any)=>{
    this.homeData=res;
    console.log(res)
  })
}
}
