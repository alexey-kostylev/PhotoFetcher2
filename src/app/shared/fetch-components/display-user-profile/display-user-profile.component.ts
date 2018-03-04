import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from '../../../models/index';

@Component({
  selector: 'app-display-user-profile',
  templateUrl: './display-user-profile.component.html',
  styleUrls: ['./display-user-profile.component.scss']
})
export class DisplayUserProfileComponent implements OnInit {
  @Input() userProfile: UserProfile;

  constructor() {}

  ngOnInit() {}
}
