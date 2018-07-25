import {Portfolio} from '../models/portfolio.model';

export interface AppState {
  portfolioPage: {
    portfolios: Portfolio[]
  };
}
