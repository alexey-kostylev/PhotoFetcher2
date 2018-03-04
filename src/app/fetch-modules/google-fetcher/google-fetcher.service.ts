import { Injectable } from '@angular/core';
import { IPhotoFetcher } from '../../shared/iphoto-fetcher';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import { UserProfile, ProfileFeed } from '../../models';
// import {client} from 'gapi';

@Injectable()
export class GoogleFetcherService implements IPhotoFetcher {
  userId = '118289340628109480185';
  apiKey = 'AIzaSyABEPVyKWz3kQGnffsNFrYxGwROGxP7jYM';

  /**
   *
   */
  constructor() {
    // gapi.client.setApiKey(this.apiKey);
  }

  getUserProfile(userId: string): Observable<ProfileFeed> {
    throw new Error('Method not implemented.');
  }

  getUserId(email: string): Observable<string> {
    return Observable.of(this.userId);
  }
}
