import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HomeService } from 'src/app/home/service/home.service';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  allQuizs:any;
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getAllQuizs()
  }
  getAllQuizs(){
    this.homeService.home().subscribe((res:any)=>{
      this.allQuizs=res
      console.log(this.allQuizs)
    })
  }
}
