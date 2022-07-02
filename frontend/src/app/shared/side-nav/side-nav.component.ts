import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../service/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  mode:any='push'
 @ViewChild('sidenav') sidenav!:MatSidenav;
  constructor(private sidenavService:SideNavService ,) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);  
  }
  
}
