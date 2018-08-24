import { TestBed, inject } from '@angular/core/testing';

import { CountryLanguageService } from './country-language.service';

describe('CountryLanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryLanguageService]
    });
  });

  it('should be created', inject([CountryLanguageService], (service: CountryLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
