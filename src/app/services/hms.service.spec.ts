import { TestBed, inject } from '@angular/core/testing';

import { HMSService } from './hms.service';

describe('HMSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HMSService]
    });
  });

  it('should be created', inject([HMSService], (service: HMSService) => {
    expect(service).toBeTruthy();
  }));
});
