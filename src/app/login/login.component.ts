import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : string = "";
  password : string = "";

  constructor(private loginService : LoginService ) { }

  ngOnInit(): void {
  }

  connexion () {
    console.log (this.login + " " + this.password);
    this.loginService.login (this.login,this.password).subscribe (flux => console.log (flux));
  }
}