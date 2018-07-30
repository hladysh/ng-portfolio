import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  readonly API_URL = 'http://localhost:3003/';

  constructor(
    public http: HttpClient) {
  }

  getData(url: string): Observable<any> {
    return this.http.get<any>(this.API_URL + url, {});
  }
}
