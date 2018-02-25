import { TestBed, inject } from '@angular/core/testing';

import { PicasaFetcherService } from './picasa-fetcher.service';

describe('PicasaFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicasaFetcherService]
    });
  });

  it('should be created', inject([PicasaFetcherService], (service: PicasaFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
