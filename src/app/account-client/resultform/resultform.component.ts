import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/shared/models/person';


@Component({
  selector: 'app-resultform',
  templateUrl: './resultform.component.html',
  styleUrls: ['./resultform.component.css']
})
export class ResultformComponent implements OnInit {

  @Input () user : Person;
  constructor() { }

  ngOnInit(): void {


    Object.keys(this.user).forEach(key => {
      console.log('testttt', key, this.user[key]);
    });

  }

}