import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {Portfolios} from '../../models/portfolio.model';
import {AppState} from '../../redux/app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  public portfolioState: Observable<Portfolios>;

  portfolioList = [
    {
      id: 1,
      img: 'bags.PNG',
      alt: 'bags',
      name: 'Шустрік',
      descr: 'Розробка сайту',
      href: 'http://bizik.shustrik.com.ua/',
    },
    {
      id: 2,
      img: 'b-b.png',
      alt: 'bags',
      name: '',
      descr: '',
      href: '',
    },
    {
      id: 3,
      img: 'lux-visa.png',
      alt: 'Lux-visa',
      name: 'Lux-visa',
      descr: 'Центр візової підтримки',
      href: 'http://luxvisa.com.ua/',
    },
  ];

  // constructor() {
  // }
  //
  //
  // ngOnInit() {
  //   console.log(this.portfolioList);
  // }

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.portfolioState = this.store.select('portfolioPage');
    // this.portfolioState = this.store.select('portfolioPage').subscribe(data => {
    //   console.log(data);
    // });

    console.log(this.portfolioState);
  }

}
