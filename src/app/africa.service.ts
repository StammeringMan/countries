import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfricaService {

  public currentAfricanCountry;

  constructor() { 

    console.log("African Service Called");
  }
}
