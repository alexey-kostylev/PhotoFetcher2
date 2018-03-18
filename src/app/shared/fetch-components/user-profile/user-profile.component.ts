import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserProfile, ProfileFeed } from '../../../models';
import { FetcherService } from '../..';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() email: string;
  @Output() onUserId = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onFetchProfile(email) {
    this.onUserId.emit(email);
  }

  errorHandler(error: any) {
    return 'super-mega-error!!';
  }

  mapper(data: any) {}
}
