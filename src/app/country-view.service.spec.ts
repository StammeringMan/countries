import { TestBed, inject } from '@angular/core/testing';

import { CountryViewService } from './country-view.service';

describe('CountryViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryViewService]
    });
  });

  it('should be created', inject([CountryViewService], (service: CountryViewService) => {
    expect(service).toBeTruthy();
  }));
});
