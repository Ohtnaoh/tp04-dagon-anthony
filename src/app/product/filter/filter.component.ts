import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterPoisson : string = "";
  @Output() f:EventEmitter<string> = new EventEmitter<string>();
  


  constructor() { }

  ngOnInit(): void {
  }
  filterPoissons(e)
  {
    this.f.emit(this.filterPoisson);
  }
}
