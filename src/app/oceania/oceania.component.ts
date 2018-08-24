import { Component, OnInit } from '@angular/core';

//importing route code
import { OceaniaService } from '../oceania.service';
import { OceaniaHttpService } from '../oceania-http.service';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.css']
})
export class OceaniaComponent implements OnInit {

  public allOceaniaCountries;

  constructor(private oceaniaHttpService: OceaniaHttpService) {

    console.log("Oceania Component Called");
  }

  ngOnInit() {

    //method to get All Oceanic Countries

    this.allOceaniaCountries = this.oceaniaHttpService.getAllOceaniaCountries()
      .subscribe(

        data => {
          console.log(data);
          this.allOceaniaCountries = data;
        },
        
        error => {
          console.log("Some Error Occured");
          console.log(error.errorMessage);
        }
      )
  }

  ngOnDestroy() {

    console.log("Oceania Component Destroyed")
  }

}
