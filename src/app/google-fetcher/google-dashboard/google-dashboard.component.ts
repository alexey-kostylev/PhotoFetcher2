import { Component, OnInit } from '@angular/core';
import { UserProfile, PhotoAlbum, ProfileFeed, AlbumEntry } from '../../models';
import { FetcherService } from '../../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-google-dashboard',
  templateUrl: './google-dashboard.component.html',
  styleUrls: ['./google-dashboard.component.css']
})
export class GoogleDashboardComponent implements OnInit {
  readonly emailKey = 'google-email';

  email: string;
  userProfile: UserProfile;

  userAlbums: Array<AlbumEntry>;

  currentAlbum: PhotoAlbum;

  userProfileFeed: ProfileFeed;

  loading = false;

  constructor(private photoFetcher: FetcherService) {}

  ngOnInit() {
    this.email = localStorage.getItem(this.emailKey);
  }

  private getProfile(email) {
    this.loading = true;
    this.photoFetcher
      .getUserProfile(email)
      .finally(() => (this.loading = false))
      .subscribe((d: ProfileFeed) => {
        this.userProfileFeed = d;
        this.userProfile = d.userProfile;
        this.userAlbums = d.albums;
        localStorage.setItem(this.emailKey, email);
      });
  }

  public onUserId(userId: string) {
    this.getProfile(userId);
  }
}
