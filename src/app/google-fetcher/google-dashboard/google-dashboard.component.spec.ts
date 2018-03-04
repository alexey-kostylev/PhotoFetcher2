import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDashboardComponent } from './google-dashboard.component';
import { UserProfileComponent } from '../../shared/fetch-components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { DisplayUserProfileComponent } from '../../shared/fetch-components/display-user-profile/display-user-profile.component';

describe('GoogleDashboardComponent', () => {
  let component: GoogleDashboardComponent;
  let fixture: ComponentFixture<GoogleDashboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [
          GoogleDashboardComponent,
          UserProfileComponent,
          DisplayUserProfileComponent
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
