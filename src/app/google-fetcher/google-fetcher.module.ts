import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleDashboardComponent } from './google-dashboard/google-dashboard.component';
import { FetchComponentsModule } from '../shared/fetch-components/fetch-components.module';
import { PicasaMapperService } from '../fetch-modules/google-fetcher/picasa-mapper.service';

@NgModule({
  imports: [CommonModule, FetchComponentsModule],
  declarations: [GoogleDashboardComponent],
  providers: [PicasaMapperService]
})
export class GoogleFetcherModule {}
