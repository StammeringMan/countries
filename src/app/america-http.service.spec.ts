import { TestBed, inject } from '@angular/core/testing';

import { AmericaHttpService } from './america-http.service';

describe('AmericaHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmericaHttpService]
    });
  });

  it('should be created', inject([AmericaHttpService], (service: AmericaHttpService) => {
    expect(service).toBeTruthy();
  }));
});
