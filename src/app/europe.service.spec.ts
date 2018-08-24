import { TestBed, inject } from '@angular/core/testing';

import { EuropeService } from './europe.service';

describe('EuropeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EuropeService]
    });
  });

  it('should be created', inject([EuropeService], (service: EuropeService) => {
    expect(service).toBeTruthy();
  }));
});
