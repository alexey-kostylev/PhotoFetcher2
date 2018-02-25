import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleDashboardComponent } from './google-dashboard/google-dashboard.component';
import { FetchComponentsModule } from '../shared/fetch-components/fetch-components.module';

@NgModule({
  imports: [
    CommonModule,
    FetchComponentsModule,
  ],
  declarations: [GoogleDashboardComponent]
})
export class GoogleFetcherModule { }
