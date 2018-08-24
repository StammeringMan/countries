import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route code
import { AsiaService } from '../asia.service';
import { AsiaHttpService } from '../asia-http.service';


@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit, OnDestroy {

  public allAsianCountries;

  constructor(private asiaHttpService: AsiaHttpService) {

    console.log("Asia Component Called");
  }

  ngOnInit() {

    //method to get all Asian Countries
    
    this.allAsianCountries = this.asiaHttpService.getAllAsianCountries()
      .subscribe(

        data => {
          console.log(data);
          this.allAsianCountries = data;
        },
        error => {
          console.log("Some Error Occured");
          console.log(error.errorMessage);
        }
      )
  }

  ngOnDestroy() {

    console.log("Asia Component Destroyed");
  }

}
