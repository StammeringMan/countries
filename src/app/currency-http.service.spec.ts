import { TestBed, inject } from '@angular/core/testing';

import { CurrencyHttpService } from './currency-http.service';

describe('CurrencyHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyHttpService]
    });
  });

  it('should be created', inject([CurrencyHttpService], (service: CurrencyHttpService) => {
    expect(service).toBeTruthy();
  }));
});
