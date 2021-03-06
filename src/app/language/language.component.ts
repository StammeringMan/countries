
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

// Router Module for Application level Route
import { Router, ActivatedRoute } from '@angular/router';

//importing services
import { CountryLanguageService } from '../country-language.service';
import { CountryLanguageHttpService } from '../country-language-http.service';


//importing observables related code
import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit, OnDestroy {

  public allSameLanguagesCountries;
  public selectedCode;

  constructor(private countryLanguageHttpService: CountryLanguageHttpService, private _route: ActivatedRoute, private location: Location) {

    console.log("Languages Component Called");
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
        return this.countryLanguageHttpService.getAllSameLanguagesCountries(this.selectedCode)
      }))
      .subscribe(
        data => {
          console.log(data);
          this.allSameLanguagesCountries = data;

        },
        error => {
          console.log("Some Error Occurred");
          console.log(error.errorMessage);
        }
      )
  }

  ngOnDestroy() {
    console.log("Language Component Destroyed");
  }
} 
