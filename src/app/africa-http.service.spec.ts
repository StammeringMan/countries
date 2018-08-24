import { TestBed, inject } from '@angular/core/testing';

import { AfricaHttpService } from './africa-http.service';

describe('AfricaHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfricaHttpService]
    });
  });

  it('should be created', inject([AfricaHttpService], (service: AfricaHttpService) => {
    expect(service).toBeTruthy();
  }));
});
