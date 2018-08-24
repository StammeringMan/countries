import { TestBed, inject } from '@angular/core/testing';

import { AsiaService } from './asia.service';

describe('AsiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsiaService]
    });
  });

  it('should be created', inject([AsiaService], (service: AsiaService) => {
    expect(service).toBeTruthy();
  }));
});
