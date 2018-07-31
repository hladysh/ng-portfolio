import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PortfolioFormService {
  portfolioForm: FormGroup;
  editState = false;

  constructor() {

  }

  initForm(portfolioData) {
    // debugger;
    this.portfolioForm = new FormGroup({
      'portfolioName': new FormControl(portfolioData.portfolioName, Validators.required),
      'portfolioHref': new FormControl(portfolioData.portfolioHref, Validators.required),
      'portfolioImg': new FormControl(portfolioData.portfolioImg, Validators.required),
      'portfolioAlt': new FormControl(portfolioData.portfolioAlt, Validators.required),
      'portfolioDescr': new FormControl(portfolioData.portfolioDescr, Validators.required),
    });
    this.editState = true;
    // console.log(portfolioData);
    // console.log(data.portfolioName);
  }
}
