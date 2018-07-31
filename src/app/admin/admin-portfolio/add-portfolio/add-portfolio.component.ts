import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

import {PortfolioService} from '../../../views/portfolio/portfolio.service';
import {AuthService} from '../../../auth/auth.service';
import {PortfolioFormService} from '../portfolio-form/portfolio-form.service';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.sass']
})
export class AddPortfolioComponent implements OnInit {

  constructor(
    public db: AngularFirestore,
    public authService: AuthService,
    public portfolioService: PortfolioService,
    public portfolioFormService: PortfolioFormService,
  ) {
  }


  ngOnInit() {
    this.portfolioFormService.initForm('');
    this.portfolioFormService.editState = false;
  }



}
