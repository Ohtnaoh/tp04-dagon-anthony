import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Poisson } from 'src/shared/models/poisson';
import { ServiceService } from '../service.service';
import { AddPoisson } from "../../../shared/actions/panier.action";


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  // var
  poissons:Array<Poisson> = [];
  poissonsFilter:Array<Poisson> = [];
  isEmpty:boolean = false;

  @Input() filterPoisson:String;

  constructor(public listPoisson:ServiceService, private store:Store) { } //

  ngOnInit(): void {
    console.log("catalogue")
    this.listPoisson.getAll().subscribe(res =>{
        this.poissons = res;
        this.poissonsFilter = res;
        console.log(this.poissons);
      })
  }

  search(filter:string) {
    this.filterPoisson = filter;
    this.isEmpty = false;
    this.poissonsFilter = [];

    if (this.filterPoisson === "") {
      this.poissonsFilter = this.poissons;
      return;
    } 

    for (let i = 0; i < this.poissons.length; i++)
    {
      if (this.poissons[i].designation.toLowerCase().includes(this.filterPoisson.toLowerCase().trim())) {
        this.poissonsFilter.push(this.poissons[i]);
      }
    }

    if (this.poissonsFilter.length == 0)
    {
      this.isEmpty = true;
    }
  }


  addClick(p:Poisson){
    this.addProduct(p);
  }

  private addProduct(p) {
    this.store.dispatch(new AddPoisson(p));
  }
}
