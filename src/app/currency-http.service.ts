import { Injectable } from '@angular/core';

//importing Http Client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Router Module for Application level Route
import { Router, ActivatedRoute } from '@angular/router';

//importing observables related code
import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class CurrencyHttpService {

  public currentCurrencyCode;
  
  public baseUrl = 'https://restcountries.eu/rest/v2/currency/';
  
  constructor(private _http: HttpClient) { 
    console.log("Currency View Service Called");

  }

  // Exception Handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
  }


  // method to return single country Informations
  public getAllSameCurrencyCountries(currentCurrencyCode): any {

    let myResponse = this._http.get(this.baseUrl + currentCurrencyCode);
    console.log(myResponse);
    return myResponse;
  } // end get country info function
}
