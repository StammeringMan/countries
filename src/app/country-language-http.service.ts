import { Injectable } from '@angular/core';

//importing Http Client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


//importing observables related code
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})


export class CountryLanguageHttpService {

  public currentLanguageCode;
  
  public baseUrl = 'https://restcountries.eu/rest/v2/lang/';
  
  constructor(private _http: HttpClient) { 
    console.log("Country Language View Service Called");

  }

  // Exception Handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
  }


  // method to return single country Informations
  public getAllSameLanguagesCountries(currentLanguageCode): any {

    let myResponse = this._http.get(this.baseUrl + currentLanguageCode);
    console.log(myResponse);
    return myResponse;
  } // end get country info function
}
