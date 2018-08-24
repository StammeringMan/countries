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

export class OceaniaHttpService {

  public allOceaniaCountries;
  public currentOceaniaCountry;
  public baseUrl = "https://restcountries.eu/rest/v2/region";

  constructor(private _http: HttpClient) { 

    console.log("Oceania Http Service Called");
  }

  //Exception Handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle Error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return all Oceania Countries

  public getAllOceaniaCountries(): any {

    let myResponse = this._http.get(this.baseUrl + '/oceania');
    console.log(myResponse);
    return myResponse;
  }
}
