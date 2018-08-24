import { Component, OnInit, OnDestroy } from '@angular/core';

// Router Module for Application level Route
import { Router, ActivatedRoute } from '@angular/router';

//importing route code
import { CountryLanguageService } from '../country-language.service';
import { CountryLanguageHttpService } from '../country-language-http.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  public allSameLanguagesCountries;
  public selectedCode;
  constructor(private countryLanguageHttpService: CountryLanguageHttpService) {

    console.log("Languages Component Called");
  }

  ngOnInit() {

    // method to get all same language speaking countries
    this.allSameLanguagesCountries = this.countryLanguageHttpService.getAllSameLanguagesCountries(this.selectedCode)
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

    console.log("Africa Component Destroyed");
  }

} 