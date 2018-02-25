import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserProfile } from '../../../models';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    email: string;
    @Output() onUserProfile = new EventEmitter<UserProfile>();

    constructor() { }

    ngOnInit() {
    }

    onFetchProfile() {
        alert('fetching email: ' + this.email);
    }
}
