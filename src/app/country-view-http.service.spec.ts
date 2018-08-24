import { TestBed, inject } from '@angular/core/testing';

import { CountryViewHttpService } from './country-view-http.service';

describe('CountryViewHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryViewHttpService]
    });
  });

  it('should be created', inject([CountryViewHttpService], (service: CountryViewHttpService) => {
    expect(service).toBeTruthy();
  }));
});
