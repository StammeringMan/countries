import { TestBed, inject } from '@angular/core/testing';

import { AsiaHttpService } from './asia-http.service';

describe('AsiaHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsiaHttpService]
    });
  });

  it('should be created', inject([AsiaHttpService], (service: AsiaHttpService) => {
    expect(service).toBeTruthy();
  }));
});
