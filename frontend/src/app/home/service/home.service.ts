import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
 
  constructor(private readonly http:HttpClient) { }
  home(){
     return this.http.get(`http://localhost:3000/`)
    
  }
}
