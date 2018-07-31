import {Injectable} from '@angular/core';

import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AddPortfolioService {


  constructor(private db: AngularFireDatabase) {
  }

  /// Creates an Ad, then returns as an object
  // createAd() {
  //   const adDefault = new PortfolioSingle();
  //   const adKey = this.db.list('/portfolioSingle').push(adDefault).key;
  //   return this.db.object('/portfolioSingle/' + adKey);
  // }


  /// Updates an existing Ad
  // updateAd(ad, data: any) {
  //   return ad.update(data);
  // }
}
