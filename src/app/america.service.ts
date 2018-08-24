import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmericaService {

  public currentAmericanCountry;

  constructor() { 

    console.log("American Service Called");
  }
}
