import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AsiaService {

  public currentAsianCountry;

  constructor() { 

    console.log("Asia Component Called");
  }
}
