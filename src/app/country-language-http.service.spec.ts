import { TestBed, inject } from '@angular/core/testing';

import { CountryLanguageHttpService } from './country-language-http.service';

describe('CountryLanguageHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryLanguageHttpService]
    });
  });

  it('should be created', inject([CountryLanguageHttpService], (service: CountryLanguageHttpService) => {
    expect(service).toBeTruthy();
  }));
});
