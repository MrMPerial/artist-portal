import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { ArtistHeaderComponent } from './artist-header/artist-header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './signup/artist/artist.component';
import { FanComponent } from './signup/fan/fan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './dashboard/upload/upload.component';
import { ManageComponent } from './dashboard/manage/manage.component';
import { DeleteComponent } from './dashboard/delete/delete.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { FanDashboardComponent } from './fan-dashboard/fan-dashboard.component';
import { FanPublicComponent } from './fan-dashboard/fan-public/fan-public.component';
import { FanPrivateComponent } from './fan-dashboard/fan-private/fan-private.component';
import { DashboardNavComponent } from './dashboard/dashboard-nav/dashboard-nav.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    ArtistHeaderComponent,
    LoginComponent,
    HomeComponent,
    ArtistComponent,
    FanComponent,
    DashboardComponent,
    UploadComponent,
    ManageComponent,
    DeleteComponent,
    ProfileComponent,
    FanDashboardComponent,
    FanPublicComponent,
    FanPrivateComponent,
    DashboardNavComponent,
    DashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
