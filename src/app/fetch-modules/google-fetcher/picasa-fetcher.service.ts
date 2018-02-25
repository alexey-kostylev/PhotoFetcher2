import { Injectable } from '@angular/core';
import { IPhotoFetcher } from '../../shared/iphoto-fetcher';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserProfile, ProfileFeed } from '../../models';
import { Http, URLSearchParams, RequestOptions, Response } from '@angular/http';

@Injectable()
export class PicasaFetcherService implements IPhotoFetcher {
  getUserProfileUrl = 'https://picasaweb.google.com/data/feed/api/user/:userId';

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

    return this.http.get(url, options).map(this.extractProfileFeed);
  }

  private extractProfileFeed(response: Response): ProfileFeed {
    const data = response.json();

    return new ProfileFeed();
  }

  constructor(private http: Http) {}
}
