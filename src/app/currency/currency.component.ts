
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

// Router Module for Application level Route
import { Router, ActivatedRoute } from '@angular/router';

//importing Services
import { CurrencyService } from '../currency.service';
import { CurrencyHttpService } from '../currency-http.service';


//importing observables related code
import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit, OnDestroy {

  public allSameCurrenciesCountries;
  public selectedCode;

  constructor(private currencyHttpService: CurrencyHttpService, private _route: ActivatedRoute, private location: Location) {

    console.log("Currencies Component Called");
  }

  backClicked() {
    this.location.back();
  }


  ngOnInit() {

    // method to get all same language speaking countries

    this._route.params.subscribe(params => this.selectedCode = params['code']);
    console.log(this.selectedCode);
    this._route.params
      .pipe(switchMap(params => {
        return this.currencyHttpService.getAllSameCurrencyCountries(this.selectedCode)
      }))
      .subscribe(
        data => {
          console.log(data);
          this.allSameCurrenciesCountries = data;

        },
        error => {
          console.log("Some Error Occurred");
          console.log(error.errorMessage);
        }
      )
  }

  ngOnDestroy() {
    console.log("Currency Component Destroyed");
  }
} 
