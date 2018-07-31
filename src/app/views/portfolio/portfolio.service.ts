import {Injectable} from '@angular/core';

import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  appLoader = false;

  portfolioList;

  constructor(
    public db: AngularFirestore,
  ) {
  }

  loadPortfolio() {
    this.db
      .collection('portfolioList', ref => {
        return ref.orderBy('portfolioName').limit(30);
      })
      // .valueChanges()
      .snapshotChanges()
      .pipe(
        map(docArray => {
          return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            };
          });
        })
      )
      .subscribe(portfolioList => {
        this.portfolioList = portfolioList;
        // console.log(portfolioList);
        this.appLoader = true;
      });
  }

}
