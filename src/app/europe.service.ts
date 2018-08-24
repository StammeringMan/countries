import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class EuropeService {

  public currentEuropeanCountry;

  constructor() { 

    console.log("Europe Component Called")
  }
}
