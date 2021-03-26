import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-client',
  templateUrl: './account-client.component.html',
  styleUrls: ['./account-client.component.css']
})
export class AccountClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("account-client")
  }

}
