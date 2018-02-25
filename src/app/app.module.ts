import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { GoogleFetcherModule } from './google-fetcher/google-fetcher.module';
import { GoogleDashboardComponent } from './google-fetcher/google-dashboard/google-dashboard.component';

const appRoutes: Routes = [
  { path: 'page1', component: FirstPageComponent },
  { path: 'page2', component: SecondPageComponent },
  { path: 'google', component: GoogleDashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    GoogleFetcherModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
