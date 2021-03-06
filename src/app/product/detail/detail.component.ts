import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddPoisson } from 'src/shared/actions/panier.action';
import { Poisson } from 'src/shared/models/poisson';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, public service:ServiceService, public store:Store) { 
    this.ref = this.route.snapshot.paramMap.get('ref');
    /*this.service.getAll().subscribe(e => {
      this.poisson = e.find(i => i.ref === this.ref);
    })*/
  }

  ref : string = "";
  poisson:Poisson;

  ngOnInit(): void {
    this.initialize();
  }

  async initialize() {
    this.ref = this.route.snapshot.paramMap.get('ref');

    this.service.getById(this.ref).subscribe(e => this.poisson = e);
    //console.log("INIT");
    //console.log("REF : " + this.ref);
    //console.log("RES GET BY ID : " + this.service.getById(this.ref));
    
    
  }

  addClick(p:Poisson){
    this.addProduct(p);
  }

  private addProduct(p) {
    this.store.dispatch(new AddPoisson(p));
  }
}
