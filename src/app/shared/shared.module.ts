import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryViewComponent } from './country-view/country-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CountryViewComponent
  ],
  exports: [
    CountryViewComponent,
    CommonModule
  ]
})
export class SharedModule { }
