import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlLogin = "http://localhost/api/login";
  constructor(private httpClient : HttpClient ) { }

  public login(login : string, password : string) :   Observable<any> {
    let httpOptions = {
      headers :  new HttpHeaders ({'Content-Type':'application/json'})};

    return this.httpClient.post<any> (this.urlLogin,{"username":login,"password":password},httpOptions);
  }
}