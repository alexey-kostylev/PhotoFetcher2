import { Injectable } from '@angular/core';
import { PhotoAlbum, ProfileFeed, UserProfile, AlbumEntry } from '../../models';

@Injectable()
export class PicasaMapperService {
  constructor() {}

  parsePhotoAlbum(feed: any) {
    const photoAlbum = new PhotoAlbum();
    photoAlbum.photoId = feed.id.$t;
    photoAlbum.title = feed.title.$t;
    // photoAlbum.published = feed.published.$t;
    photoAlbum.updated = new Date(feed.gphoto$timestamp.$t);
    photoAlbum.thumbnail = feed.icon.$t;

    const links = <Array<any>>feed.link;

    const foundLink = links.find(
      x => x.rel === 'alternate' && x.type === 'text/html'
    );
    if (foundLink) {
      photoAlbum.url = foundLink.href;
    }

    photoAlbum.numberOfPhotos = Number(feed.gphoto$numphotos.$t);

    return photoAlbum;
  }

  parseProfileFeed(feed: any): ProfileFeed {
    const profile = this.parseUserProfile(feed);
    const albums = this.parseAlbums(feed);

    const profileFeed: ProfileFeed = {
      userProfile: profile,
      albums: albums
    };
    return profileFeed;
  }

  parseUserProfile(feed: any): UserProfile {
    const profile = new UserProfile();
    profile.id = feed.id.$t;
    profile.title = feed.title.$t;
    profile.iconUrl = feed.icon.$t;
    profile.author = feed.author.length > 0 ? feed.author[0].name.$t : '';
    profile.authorUrl = '';
    profile.albumCount = feed.openSearch$totalResults.$t;
    profile.userId = feed.gphoto$user.$t;
    profile.thumbnail = feed.gphoto$thumbnail.$t;
    return profile;
  }

  parseAlbum(entry: any): AlbumEntry {
    const album = new AlbumEntry();
    album.albumId = entry.gphoto$id.$t;

    album.title = entry.title.$t;
    if (entry.media$group) {
      album.thumbnail = entry.media$group.media$thumbnail[0].url;
    }

    album.updated = new Date(entry.updated.$t);

    if (entry.published) {
      album.published = new Date(entry.published.$t);
    } else {
      if (entry.gphoto$timestamp) {
        album.published = new Date(entry.gphoto$timestamp.$t);
      }
    }

    const links = <Array<any>>entry.link;

    const foundLink = links.find(
      x => x.type === 'text/html' && x.rel === 'alternate'
    );

    if (foundLink) {
      album.albumUrl = foundLink.href;
    }

    album.numberOfPhotos = Number(entry.gphoto$numphotos.$t);
    album.author = entry.author[0].name.$t;
    return album;
  }

  parseAlbums(feed: any): Array<AlbumEntry> {
    const albums = new Array<AlbumEntry>();

    const entries = <Array<any>>feed.entry;
    for (const entry of entries) {
      const parsed = this.parseAlbum(entry);
      albums.push(parsed);
    }

    return albums;
  }
}
