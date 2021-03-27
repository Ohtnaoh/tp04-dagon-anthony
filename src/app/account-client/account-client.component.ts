import { Component, OnInit } from '@angular/core';
import { Person } from '../../shared/models/person'

@Component({
  selector: 'app-account-client',
  templateUrl: './account-client.component.html',
  styleUrls: ['./account-client.component.css']
})
export class AccountClientComponent implements OnInit {

  allComplete:boolean=true;

  usr:Person=null;
  lastname:string="";
  firstname:string="";
  address:string="";
  postalCode:string="";
  login:string="";
  email:string="";
  password:string="";
  confirmPassword:string="";
  phoneNumber:string="";
  salutation:string="";
  error: string="";
  berror: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  send(): void{
    this.usr=null;
    this.error='';
    this.berror=false;
    
    const regexNumber = new RegExp('^\\d+$')
    /*console.log(
      "    lastname : ", this.lastname +
      "    firstname : ", this.firstname +
      "    address : ", this.address +
      "    postalCode : ", this.postalCode +
      "    login : ", this.login +
      "    email : ", this.email +
      "    password : ", this.password +
      "    confirmPassword : ", this.confirmPassword +
      "    phoneNumber : ", this.phoneNumber +
      "    salutation : ", this.salutation +
      "    error : ", this.error
    )*/


    

    if(this.lastname=="" || this.firstname=="" || this.address=="" || this.postalCode=="" || this.login=="" || this.email=="" ||
          this.password=="" || this.confirmPassword=="" || this.phoneNumber=="" || this.salutation==""){
        this.error = "Please, complete all input";
        this.berror = true;


    }else{
      if(!regexNumber.test(this.phoneNumber)){
        this.error = "The phone number must only get digits"
        this.berror = true;
      }
      if(!regexNumber.test(this.postalCode)){
        this.error = "The postal code must only get digits"
        this.berror = true;
      }
      if(this.password != this.confirmPassword){
        this.error = "Your password and your confirm password are not identical";
        this.berror = true;
      }
    }

    if(this.berror==false){
      this.usr = new Person(this.lastname, this.firstname, this.address, this.postalCode, this.login, this.email, this.password, this.phoneNumber, this.salutation);
    }
  }
}
