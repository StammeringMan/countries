import { Injectable } from '@angular/core';


//importing HttpClient to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//importing observables related code
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})


export class EuropeHttpService {

  public allEuropeanCountries;
  public currentEuropeanCountry;
  public baseUrl = "https://restcountries.eu/rest/v2/region";

  constructor(private _http: HttpClient) { 

    console.log("Europe Component Called");
  }

  //exception handlers
  private handleError(err: HttpErrorResponse) {
    console.log("Handle Error Http Calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return all European Countries

  public getAllEuropeanCountries(): any{

    let myResponse = this._http.get(this.baseUrl + '/europe');
    console.log(myResponse);
    return myResponse;
  }
}
