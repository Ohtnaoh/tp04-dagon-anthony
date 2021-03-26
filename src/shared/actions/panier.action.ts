import {Poisson} from '../models/poisson';

export class AddPoisson {
    static readonly type = "[Poisson] Add";
    constructor (public payload : Poisson) {};
}

export class DelPoisson {
    static readonly type = "[Poisson] Del";
    constructor (public payload : Poisson) {};
}