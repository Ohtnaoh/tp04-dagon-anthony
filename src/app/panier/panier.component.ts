import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Poisson } from 'src/shared/models/poisson';
import { DelPoisson } from "../../shared/actions/panier.action";



@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  numberArticle: number;
  contentPanier: Observable<Poisson[]>;
  isEmpty: Boolean = true;
  totalPrice: number;
  
  constructor(private store: Store) { 
    this.totalPrice = 0;
    this.store.select(state => state.panier.panier).subscribe(i => this.numberArticle = i.length);
    this.store.select(state => state.panier.panier).subscribe(i => this.isEmpty = i.length < 1);
    this.store.select(state => state.panier.panier).subscribe(i =>{
      let t = 0;
      for (const poisson of i) {
         t += poisson.prix;
      }
      this.totalPrice = t;
    });

    this.contentPanier = this.store.select(state => state.panier.panier);
  }

  ngOnInit(): void {
  }


  delClick(poisson){
    this.delProduct(poisson)
  }

  private delProduct(poisson) {
    this.store.dispatch(new DelPoisson(poisson))
  }
}
