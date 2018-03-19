import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { DisplayUserProfileComponent } from './display-user-profile/display-user-profile.component';
import { SpinLoaderComponent } from './spin-loader/spin-loader.component';
import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    UserProfileComponent,
    DisplayUserProfileComponent,
    SpinLoaderComponent,
    AlbumListComponent
  ],
  exports: [
    UserProfileComponent,
    DisplayUserProfileComponent,
    SpinLoaderComponent,
    AlbumListComponent
  ]
})
export class FetchComponentsModule {}
