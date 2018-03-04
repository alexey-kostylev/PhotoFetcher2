import { TestBed, inject } from '@angular/core/testing';

import { PicasaFetcherService } from './picasa-fetcher.service';

import * as picasa_response from './test/picasa-response.json';
import * as picasa_album from './test/picasa-album-response.json';

import {
  HttpModule,
  XHRBackend,
  ResponseOptions,
  Response
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PicasaMapperService } from './picasa-mapper.service';

describe('PicasaFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PicasaFetcherService,
        PicasaMapperService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it(
    'should be created',
    inject([PicasaFetcherService], (service: PicasaFetcherService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should get user profile',
    inject(
      [PicasaFetcherService, XHRBackend],
      (service: PicasaFetcherService, mockBackend: MockBackend) => {
        const response = picasa_response;

        mockBackend.connections.subscribe(connection => {
          connection.mockRespond(
            new Response(
              new ResponseOptions({
                body: JSON.stringify(response)
              })
            )
          );
        });
        service.getUserProfile('user-id').subscribe(data => {
          // expect(data.albums.length).toBe(2);
          expect(data.userProfile).toBeTruthy();

          const profile = data.userProfile;
          expect(profile.title).toBe('118289340628109480185');

          const albums = data.albums;
          expect(albums.length).toBe(188);
        });
      }
    )
  );
});
