import { UserProfile } from './user-profile';
import { AlbumEntry } from './album-entry';

export class ProfileFeed {
  userProfile: UserProfile;
  albums: Array<AlbumEntry>;
}
