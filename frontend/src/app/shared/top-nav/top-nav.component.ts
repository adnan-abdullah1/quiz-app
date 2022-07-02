import { Component, OnInit,ViewChild } from '@angular/core';

import { SideNavService } from '../service/side-nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  
  constructor(private sidenavService:SideNavService) { }

  ngOnInit(): void {
  }
  toggleRightSidenav() {
    console.log('done click in top')
    this.sidenavService.toggle();
  }
}
