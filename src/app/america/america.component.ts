import { Component, OnInit, OnDestroy } from '@angular/core';


//importing Service related code
import { AmericaService } from '../america.service';
import { AmericaHttpService } from '../america-http.service';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.css']
})

export class AmericaComponent implements OnInit, OnDestroy {

  public allAmericanCountries;


  constructor(private americaHttpService: AmericaHttpService) {

    console.log("America Component Called");
  }

  ngOnInit() {

    //method to get All African Countries

    this.allAmericanCountries = this.americaHttpService.getAllAmericanCountries()
      .subscribe(

        data => {
          console.log(data);
          this.allAmericanCountries = data;
        },
        error => {
          console.log("Some Error Occurred");
          console.log(error.errorMessage);
        }
      )
  }

  ngOnDestroy() {

    console.log("America Component Destroyed");
  }

}
