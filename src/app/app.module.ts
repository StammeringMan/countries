import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// Router Module for Application level Route
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AfricaComponent } from './africa/africa.component';
import { AmericaComponent } from './america/america.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropeComponent } from './europe/europe.component';
import { OceaniaComponent } from './oceania/oceania.component'
import { CountryViewComponent } from './shared/country-view/country-view.component';
import { LanguageComponent } from './language/language.component';
import { CurrencyComponent } from './currency/currency.component';


// import statement for services
import { AfricaService } from './africa.service';
import { AfricaHttpService } from './africa-http.service';

import { AmericaService } from './america.service';
import { AmericaHttpService } from './america-http.service';

import { AsiaService } from './asia.service';
import { AsiaHttpService } from './asia-http.service';

import { EuropeService } from './europe.service';
import { EuropeHttpService } from './europe-http.service';

import { OceaniaService } from './oceania.service';
import { OceaniaHttpService } from './oceania-http.service';

import { CountryLanguageService } from './country-language.service';
import { CountryLanguageHttpService } from './country-language-http.service';

import { CurrencyService } from './currency.service';
import { CurrencyHttpService } from './currency-http.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AfricaComponent,
    AmericaComponent,
    AsiaComponent,
    EuropeComponent,
    OceaniaComponent,
    CountryViewComponent,
    LanguageComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'africa', component: AfricaComponent },
      { path: 'america', component: AmericaComponent },
      { path: 'asia', component: AsiaComponent },
      { path: 'europe', component: EuropeComponent },
      { path: 'oceania', component: OceaniaComponent },
      { path: 'country/:name', component: CountryViewComponent },
      { path: 'language/:code' , component: LanguageComponent },
      { path: 'currency/:code', component: CurrencyComponent }
    ]),
    HttpClientModule
  ],
  providers: [AfricaService, AfricaHttpService, AmericaService, AmericaHttpService,
    AsiaService, AsiaHttpService, EuropeService, EuropeHttpService,
    OceaniaService, OceaniaHttpService, CountryLanguageService, CountryLanguageHttpService, CurrencyHttpService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
