import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { UserProfile, ProfileFeed } from '../models';

export interface IPhotoFetcher {
  getUserId(email: string): Observable<string>;

  getUserProfile(userId: string): Observable<ProfileFeed>;
}
