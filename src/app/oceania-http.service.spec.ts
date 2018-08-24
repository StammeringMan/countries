import { TestBed, inject } from '@angular/core/testing';

import { OceaniaHttpService } from './oceania-http.service';

describe('OceaniaHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OceaniaHttpService]
    });
  });

  it('should be created', inject([OceaniaHttpService], (service: OceaniaHttpService) => {
    expect(service).toBeTruthy();
  }));
});
