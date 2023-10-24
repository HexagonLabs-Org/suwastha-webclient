import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLoginComponent } from './components/AuthComponents/MainLogin/MainLogin.component';
import { DashboardComponent } from './components/LayoutComponents/dashboard/dashboard.component';
import { ProfileComponent } from './components/LayoutComponents/profile/profile.component';
import { SettingsComponent } from './components/LayoutComponents/settings/settings.component';
import { PatientListComponent } from './components/CRUDComponents/patient-CRUD/patient-list/patient-list.component';
import { PatientAddComponent } from './components/CRUDComponents/patient-CRUD/patient-add/patient-add.component';
import { PatientDetailsComponent } from './components/CRUDComponents/patient-CRUD/patient-details/patient-details.component';
import { PatientEditComponent } from './components/CRUDComponents/patient-CRUD/patient-edit/patient-edit.component';
import { DoctorListComponent } from './components/CRUDComponents/doctor-CRUD/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './components/CRUDComponents/doctor-CRUD/doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './components/CRUDComponents/doctor-CRUD/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './components/CRUDComponents/doctor-CRUD/doctor-edit/doctor-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: MainLoginComponent },
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
