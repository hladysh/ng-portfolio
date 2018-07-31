import {Component, OnInit} from '@angular/core';
import {PortfolioFormService} from '../admin-portfolio/portfolio-form/portfolio-form.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.sass']
})
export class AdminNavComponent implements OnInit {

  constructor( public portfolioFormService: PortfolioFormService ,) {
  }

  ngOnInit() {
  }

}
