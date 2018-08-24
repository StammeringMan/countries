import { TestBed, inject } from '@angular/core/testing';

import { AmericaService } from './america.service';

describe('AmericaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmericaService]
    });
  });

  it('should be created', inject([AmericaService], (service: AmericaService) => {
    expect(service).toBeTruthy();
  }));
});
