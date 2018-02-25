import { TestBed, inject } from '@angular/core/testing';

import { GoogleFetcherService } from './google-fetcher.service';

describe('GoogleFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleFetcherService]
    });
  });

  it('should be created', inject([GoogleFetcherService], (service: GoogleFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
