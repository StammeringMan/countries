import { Component, OnInit, OnDestroy } from '@angular/core';


// importing Route related code
import { AfricaService } from '../africa.service';
import { AfricaHttpService } from '../africa-http.service';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})

export class AfricaComponent implements OnInit, OnDestroy {

  navIsFixed: boolean;
  public allAfricanCountries;

  constructor(private africaHttpService: AfricaHttpService) {

    console.log('Africa component called');
  }

  ngOnInit() {

    // method to get All African Countries

    this.allAfricanCountries = this.africaHttpService.getAllAfricanCountries()
      .subscribe(

        data => {
          console.log(data);
          this.allAfricanCountries = data;
        },
        error => {
          console.log('Some Error Occurred');
          console.log(error.errorMessage);
        }
      )
  }


  ngOnDestroy() {

    console.log("Africa Component Destroyed");
  }



}
