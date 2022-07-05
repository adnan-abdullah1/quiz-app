import {AfterViewInit,ViewChild, Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

//table::::::::::::::
export interface PeriodicElements{
  name:string;
  position:number;
  weight:number;
  symbol:string
}
const Element_Data:PeriodicElements[]=[
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]
//table ends :::::::::::::::::::::::
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  //:table
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns=['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = new MatTableDataSource<PeriodicElements>(Element_Data);
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
}
