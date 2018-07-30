import {Injectable} from '@angular/core';
import {AppState} from '../../redux/app.state';
import {Store} from '@ngrx/store';
import {BaseApiService} from './base-api.service';

import {LoadPortfolio} from '../../redux/portfolio.action';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  appLoader = false;

  constructor(
    public baseApiService: BaseApiService,
    private store: Store<AppState>) {
  }

  loadPortfolio(): void {
    this.baseApiService.getData(`portfolioList/`)
      .subscribe(portfolios => {
        // console.log(portfolio);
        this.store.dispatch(new LoadPortfolio(portfolios));
        // setTimeout(() => {
        //   this.appLoader = true;
        // }, 2000);
        this.appLoader = true;
      });

  }

}
