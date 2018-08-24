import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common'

// importing route related code
import { ActivatedRoute, Router } from '@angular/router';

//importing Service related code
import { CountryViewService } from '../../country-view.service';
import { CountryViewHttpService } from '../../country-view-http.service';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})

export class CountryViewComponent implements OnInit, OnDestroy {

  @Input() country: String;

  public currentCountry;

  constructor(private _route: ActivatedRoute, private countryViewHttpService: CountryViewHttpService, private location: Location) {
    console.log("Contry View Constructor  Called");
  }

  backClicked() {
    this.location.back();
  }

  ngOnInit() {
    console.log("ngInit Called");
    // getting the name of the country from the route
    this._route.params.subscribe(params => this.country = params['name']);
    console.log(this.country);


    this.countryViewHttpService.getSingleCountryInfo(this.country).subscribe(

      data => {
        console.log(data);
        this.currentCountry = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

  ngOnDestroy() {
    console.log("Country View Component Destroyed");
  }
}
