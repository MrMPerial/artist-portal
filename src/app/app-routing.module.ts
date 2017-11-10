import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ArtistComponent } from './signup/artist/artist.component';
import { FanComponent } from './signup/fan/fan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { ManageComponent } from './dashboard/manage/manage.component';
import { UploadComponent } from './dashboard/upload/upload.component';
import { DeleteComponent } from './dashboard/delete/delete.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'artist-signup',
    component: ArtistComponent
  },
  {
    path: 'fan-signup',
    component: FanComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'portal',
    component: DashboardHomeComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
