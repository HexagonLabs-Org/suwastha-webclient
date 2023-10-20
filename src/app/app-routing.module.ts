import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PatientListComponent } from './components/patient-CRUD/patient-list/patient-list.component';
import { PatientAddComponent } from './components/patient-CRUD/patient-add/patient-add.component';
import { PatientDetailsComponent } from './components/patient-CRUD/patient-details/patient-details.component';
import { PatientEditComponent } from './components/patient-CRUD/patient-edit/patient-edit.component';
import { DoctorListComponent } from './components/doctor-CRUD/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './components/doctor-CRUD/doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './components/doctor-CRUD/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './components/doctor-CRUD/doctor-edit/doctor-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  {
    path: 'home',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'patients/add', component: PatientAddComponent },
      { path: 'patients/edit/:id', component: PatientEditComponent },
      { path: 'patients/details/:id', component: PatientDetailsComponent },
      { path: 'doctors', component: DoctorListComponent },
      { path: 'doctors/add', component: DoctorAddComponent },
      { path: 'doctors/edit/:id', component: DoctorEditComponent },
      { path: 'doctors/details/:id', component: DoctorDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
