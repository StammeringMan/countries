import { TestBed, inject } from '@angular/core/testing';

import { AfricaService } from './africa.service';

describe('AfricaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfricaService]
    });
  });

  it('should be created', inject([AfricaService], (service: AfricaService) => {
    expect(service).toBeTruthy();
  }));
});
