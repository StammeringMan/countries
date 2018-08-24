import { Component, OnInit, OnDestroy } from '@angular/core';

//importing route code
import { EuropeService } from '../europe.service';
import { EuropeHttpService } from '../europe-http.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {

  public allEuropeanCountries;

  constructor(private europeHttpService: EuropeHttpService) {

    console.log("Europe Component Called");

  }

  ngOnInit() {

    // method to get All European Countries

    this.allEuropeanCountries = this.europeHttpService.getAllEuropeanCountries()
      .subscribe(

        data => {
          console.log(data);
          this.allEuropeanCountries = data;
        },

        error => {
          console.log("Some Error Occurred");
          console.log(error.errorMessage);
        }
      )
  }

  ngOnDestroy () {

    console.log("Europe Component Destroyed");
  }

}
