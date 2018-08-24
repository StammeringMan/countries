import { TestBed, inject } from '@angular/core/testing';

import { EuropeHttpService } from './europe-http.service';

describe('EuropeHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EuropeHttpService]
    });
  });

  it('should be created', inject([EuropeHttpService], (service: EuropeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
