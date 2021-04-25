import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment'
import { Poisson } from '../../shared/models/poisson';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private urlGetAll = "http://localhost:80/api/catalogue";

  constructor(private http: HttpClient) { }

  getAll() : Observable<Poisson[]>{
    let httpOptions = {
      headers :  new HttpHeaders ({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'})};
    return this.http.get<Poisson[]>(this.urlGetAll, httpOptions);
  }

  async getById(ref:string) : Promise<Poisson>{
    
    const all =  await this.getAll().toPromise();
    const result = all.find((e) => e.reference === ref);

    /*await this.getAll().forEach(e => e.forEach(p =>{
      if(p.reference === ref){
        poisson = p;
        console.log(poisson);
      }
    }));*/
    console.log(result);
    return result;
  }
}
