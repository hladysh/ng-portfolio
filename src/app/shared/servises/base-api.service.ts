import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFirestore} from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  // readonly API_URL = 'http://localhost:3003/';
  readonly API_URL = 'http://localhost:3003/';

  constructor(
    // public db: AngularFirestore,
    public http: HttpClient) {
  }

  getData(url: string): Observable<any> {
    return this.http.get<any>(this.API_URL + url, {});
  }
}
