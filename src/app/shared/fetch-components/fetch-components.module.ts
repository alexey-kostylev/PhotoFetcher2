import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { DisplayUserProfileComponent } from './display-user-profile/display-user-profile.component';
import { SpinLoaderComponent } from './spin-loader/spin-loader.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    UserProfileComponent,
    DisplayUserProfileComponent,
    SpinLoaderComponent
  ],
  exports: [
    UserProfileComponent,
    DisplayUserProfileComponent,
    SpinLoaderComponent
  ]
})
export class FetchComponentsModule {}
