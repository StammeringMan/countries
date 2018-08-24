import { Injectable } from '@angular/core';

// importing Http Client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// importing observables related code
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class AfricaHttpService {

  public allAfricanCountries;
  public currentAfricanCountry;
  public baseUrl = 'https://restcountries.eu/rest/v2/region';
  
  
  constructor(private _http: HttpClient) {
  
    console.log('African Http Service called');
  }

  // Exception Handler
  private handleError(err: HttpErrorResponse) {
    console.log('Handle Error Http calls');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // method to return all African Countries 

  public getAllAfricanCountries(): any {

    let myResponse = this._http.get(this.baseUrl + '/africa');
    console.log(myResponse);
    return myResponse;
  }

}
