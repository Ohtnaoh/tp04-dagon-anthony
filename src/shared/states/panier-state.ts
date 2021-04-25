import { Injectable } from '@angular/core';
import { Action , State, StateContext,Selector } from '@ngxs/store';
import { AddPoisson,DelPoisson } from '../actions/panier.action';
import { PanierStateModel } from './panier-state-model';

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    panier : []
  } 
   
})
@Injectable()
export class PanierState {

    @Selector () 
    static getNbPoisson (state:PanierStateModel) {
        return state.panier.length;
    }

    @Action (AddPoisson)
        add(
            {getState, patchState } :  StateContext<PanierStateModel>, 
            { payload }: AddPoisson) {
            const state = getState();
            patchState({panier : [...state.panier, payload]});
    }

    @Action (DelPoisson)
    del(
            {getState, patchState } :  StateContext<PanierStateModel>, 
            { payload }: DelPoisson) {
            const state = getState();
            patchState({panier: [...(state.panier.filter(p => !(p.ref.match(payload.ref))))]});
    }

}