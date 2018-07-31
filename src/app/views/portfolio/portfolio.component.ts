import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {Portfolios} from '../../models/portfolio.model';
import {AppState} from '../../redux/app.state';
import {Observable} from 'rxjs';

import {AngularFirestore} from 'angularfire2/firestore';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {PortfolioService} from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  public portfolioState: Observable<Portfolios>;
  portfolioList: Observable<any[]>;

  constructor(
    public db: AngularFirestore,
    // private store: Store<AppState>,
    public rooter: Router,
    public authService: AuthService,
    public portfolioService: PortfolioService,
  ) {

  }

  delateItem(id) {
    this.db.doc('portfolioList/' + id).delete();
  }

  ngOnInit() {
    this.portfolioService.loadPortfolio();
    // this.portfolioState = this.store.select('portfolioPage');

  }

}
