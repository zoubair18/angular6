import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { UserAssurance } from '../model/userAssurance';

@Injectable()
export class ScrappingService {

  private baseUrl = 'http://localhost:8080/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private userAssurance = new UserAssurance();
  constructor(private _http: Http) { }

  login(userAssurance: UserAssurance) {
    /*return this._http
      .get(this.baseUrl + '/mma/authentifier', this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
    */

    return this._http.post(this.baseUrl + '/directAssurance/start', JSON.stringify(userAssurance), this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }

  setter(userAssurance: UserAssurance) {
    this.userAssurance = userAssurance;
  }

  getter() {
    return this.userAssurance;
  }

}
