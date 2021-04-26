import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'
import { Poisson } from '../../shared/models/poisson';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private urlGetAll = "https://cnam-dagon-projet.herokuapp.com/api/catalogue";

  constructor(private http: HttpClient) { }

  getAll() : Observable<Poisson[]>{
    let httpOptions = {
      headers :  new HttpHeaders ({
        'Content-Type':'application/json'})};
    return this.http.get<Poisson[]>(this.urlGetAll, httpOptions);
  }

  getById(ref:string) : Observable<Poisson>{
    let httpOptions = {
      headers :  new HttpHeaders ({
        'Content-Type':'application/json'})};

    var url = this.urlGetAll +"/"+ ref;
    //console.log("URL : ");
    //console.log(url);
    return this.http.get<Poisson>(url, httpOptions);
  }
}
