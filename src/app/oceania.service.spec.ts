import { TestBed, inject } from '@angular/core/testing';

import { OceaniaService } from './oceania.service';

describe('OceaniaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OceaniaService]
    });
  });

  it('should be created', inject([OceaniaService], (service: OceaniaService) => {
    expect(service).toBeTruthy();
  }));
});
