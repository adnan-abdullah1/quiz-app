import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverURL=environment.serverURL
  constructor(private http:HttpClient) { }
  register(authModel:any){
    console.log('called ',authModel)
    return this.http.post(`${this.serverURL}auth/register`,authModel)
  }
}
