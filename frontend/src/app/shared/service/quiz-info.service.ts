import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizInfoService {
  serverUrl=environment.serverURL
  constructor(private http:HttpClient) { }

  validate(authModel:any){
    return this.http.get(`${this.serverUrl}`)
  }
}
