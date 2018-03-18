import { Injectable } from '@angular/core';
import { IPhotoFetcher } from '../../shared/iphoto-fetcher';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserProfile, ProfileFeed, AlbumEntry, PhotoAlbum } from '../../models';
import { Http, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { PicasaMapperService } from './picasa-mapper.service';

@Injectable()
export class PicasaFetcherService implements IPhotoFetcher {
  getUserProfileUrl = 'https://picasaweb.google.com/data/feed/api/user/:userId';
  getPhotoAlbumUrl = 'https://picasaweb.google.com/data/feed/api/user/:userId/albumid/:albumId?alt=json';

  constructor(private http: Http, private mapper: PicasaMapperService) {}

  getUserId(email: string): Observable<string> {
    throw new Error('Method not implemented.');
  }

  getUserProfile(userId: string): Observable<ProfileFeed> {
    const url = this.getUserProfileUrl.replace(':userId', userId);
    const qryParams = new URLSearchParams();
    qryParams.set('alt', 'json');

    const options = new RequestOptions({
      params: qryParams
    });

    return this.http.get(url, options).map(data => {
      const json = data.json();
      return this.mapper.parseProfileFeed(json.feed);
    });
  }

  getPhotoAlbum(userId: string, albumId: string): Observable<PhotoAlbum> {
    const url = this.getPhotoAlbumUrl
      .replace(':userId', userId)
      .replace(':albumId', albumId);
    const qryParams = new URLSearchParams();
    qryParams.set('alt', 'json');

    const options = new RequestOptions({
      params: qryParams
    });

    return this.http.get(url, options).map(data => {
      const json = data.json();
      return this.mapper.parsePhotoAlbum(json.feed);
    });
  }
}
