import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


import {AngularFirestore} from 'angularfire2/firestore';
import {PortfolioService} from '../../../views/portfolio/portfolio.service';
import {Portfolio} from '../../../models/portfolio.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PortfolioFormService} from '../portfolio-form/portfolio-form.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.sass']
})
export class EditPortfolioComponent implements OnInit, OnDestroy {


  public portfolioID;

  // editState = false;
  portfolioForm: FormGroup;
  portfolioItem;
  editedId;

  constructor(
    public db: AngularFirestore,
    public route: ActivatedRoute,
    public portfolioService: PortfolioService,
    public portfolioFormService: PortfolioFormService,
  ) {

  }


  ngOnInit() {
    // debugger;
    // this.portfolioFormService.initForm();
    this.route.params.subscribe(params => {
      this.portfolioID = params.id;
      // this.editPortfolioService.editItem(params.id);
      this.editItem(params.id);
    });

  }

  editItem(id) {

    // this.editState = true;
    this.db.doc(`portfolioList/${id}`).valueChanges()
      .subscribe(portfolioData => {
        // this.portfolioItem = portfolioData;
        // console.log(this.portfolioItem);
        // this.editState = true;
        // this.fillForm(portfolioData);
        this.portfolioFormService.initForm(portfolioData);
      });
  }

  // fillForm(portfolioData) {
  //
  //   // console.log(portfolioData);
  //   this.portfolioFormService.initForm(portfolioData);
  //   // this.portfolioFormService.editState = true;
  // }

  // onSubmit(data) {
  //   console.log(data);
  // }


  //
  //
  //
  // updateItem(item: Portfolio) {
  //   this.editPortfolioService.updateItem(item);
  //   // this.clearState();
  // }

  // clearState() {
  //   this.editState = false;
  //   this.itemToEdit = null;
  // }

  ngOnDestroy() {
    // this.portfolioItemSub.unsubscribe();
  }


}
