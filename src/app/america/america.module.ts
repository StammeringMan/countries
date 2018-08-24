import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CountryViewComponent } from '../shared/country-view/country-view.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'country/:name', component: CountryViewComponent }
    ])
  ],
  declarations: [CountryViewComponent]
})
export class AmericaModule { }