import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from '@angular/core';
import { UserProfile } from '../../../models/index';

@Component({
  selector: 'app-display-user-profile',
  templateUrl: './display-user-profile.component.html',
  styleUrls: ['./display-user-profile.component.scss']
})
export class DisplayUserProfileComponent implements OnInit, OnChanges {
  @Input() profile: UserProfile;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
