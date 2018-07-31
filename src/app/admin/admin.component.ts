import {Component, OnInit} from '@angular/core';


import {AngularFirestore} from 'angularfire2/firestore';
import {PortfolioService} from '../views/portfolio/portfolio.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor(
    public db: AngularFirestore,
    public portfolioService: PortfolioService,
  ) {
  }

  ngOnInit() {

  }

}
