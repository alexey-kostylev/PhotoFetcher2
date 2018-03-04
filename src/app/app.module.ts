import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GoogleFetcherModule } from './google-fetcher/google-fetcher.module';
import { GoogleDashboardComponent } from './google-fetcher/google-dashboard/google-dashboard.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'google', component: GoogleDashboardComponent }
];

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    GoogleFetcherModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
