import {Action} from '@ngrx/store';
import {Portfolio} from '../models/portfolio.model';

export namespace PORTFOLIO_ACTION {
  export const LOAD_PORTFOLIO = 'LOAD_PORTFOLIO';
}


export class LoadPortfolio implements Action {
  readonly type = PORTFOLIO_ACTION.LOAD_PORTFOLIO;

  constructor(public payload: Portfolio[]) {
  }
}

export type PortfolioAction = LoadPortfolio ;
