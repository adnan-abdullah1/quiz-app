import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-view-multimedia',
  templateUrl: './view-multimedia.component.html',
  styleUrls: ['./view-multimedia.component.scss']
})
export class ViewMultimediaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }
  image=this.data.image;
  ngOnInit(): void {
    console.log(this.data,'image')
  }

}
