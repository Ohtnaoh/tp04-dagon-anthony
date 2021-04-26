import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Poisson } from '../../shared/models/poisson';
import { Person } from 'src/shared/models/person';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private urlGetAll = "http://localhost/api/catalogue";

  constructor(private http: HttpClient) { }

  getAll() : Observable<Poisson[]>{
    let httpOptions = {
      headers :  new HttpHeaders ({
        'Content-Type':'application/json'})};
    return this.http.get<Poisson[]>(this.urlGetAll, httpOptions);
  }

  async getById(ref:string) : Promise<Poisson>{
    
    const all =  await this.getAll().toPromise();
    const result = all.find((e) => e.id === ref);

    /*await this.getAll().forEach(e => e.forEach(p =>{
      if(p.reference === ref){
        poisson = p;
        console.log(poisson);
      }
    }));*/
    console.log(result);
    return result;
  }

  create(usr:Person) : Observable<Person>{
    let httpOptions = {
      headers :  new HttpHeaders ({
        'Content-Type':'application/json'})};
    return this.http.post<Person>("https://cnam-dagon-projet.herokuapp.com/api/createUser",
    {
      "salutation":usr.salutation,
      "firstname":usr.firstname,
      "lastname":usr.lastname,
      "login":usr.login,
      "email":usr.email,
      "telephone":usr.phoneNumber,
      "password":usr.password,
      "adresse":usr.address,
      "postalcode":usr.postalCode
    }, httpOptions);
  }
}
