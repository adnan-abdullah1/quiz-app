import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { SideNavService } from '../service/side-nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  
  constructor(private sidenavService:SideNavService , private readonly router:Router) { }
  closeIcon:Boolean=false;
  ngOnInit(): void {
  }
  toggleRightSidenav() {
    console.log('done click in top')
    this.sidenavService.toggle();
    this.closeIcon=!this.closeIcon;
  }
  home(){
    this.router.navigate(['/'])
  }
}
