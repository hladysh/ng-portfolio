import {Action} from '@ngrx/store';
import {Portfolio, Portfolios} from '../models/portfolio.model';

export namespace PORTFOLIO_ACTION {
  export const LOAD_PORTFOLIO = 'LOAD_PORTFOLIO';
}

export class LoadPortfolio implements Action {
  readonly type = PORTFOLIO_ACTION.LOAD_PORTFOLIO;

  constructor(public payload: Portfolios[]) {
  }
}

export type PortfolioAction = LoadPortfolio ;
