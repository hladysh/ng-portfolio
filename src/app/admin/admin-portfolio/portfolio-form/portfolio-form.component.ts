import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {PortfolioFormService} from './portfolio-form.service';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.sass']
})
export class PortfolioFormComponent implements OnInit {
  @Input() IDportfolio;

  constructor(
    public db: AngularFirestore,
    public portfolioFormService: PortfolioFormService,
  ) {
  }

  onSubmit() {
    if (this.portfolioFormService.portfolioForm.valid) {
      this.addDataToDatabase({
        ...this.portfolioFormService.portfolioForm.value,
        date: new Date(),
      });
    }
  }

  addDataToDatabase(exercise) {
    if (this.portfolioFormService.editState) {
      this.db.doc('portfolioList/' + this.IDportfolio).update(exercise);
    } else {
      this.db.collection('portfolioList').add(exercise);
    }
    this.portfolioFormService.portfolioForm.reset();
  }

  ngOnInit() {
    // console.log(this.IDportfolio);
  }

  l;

}
