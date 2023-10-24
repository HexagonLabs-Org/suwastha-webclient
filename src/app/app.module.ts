import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { TopbarComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PatientListComponent } from './components/patient-CRUD/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patient-CRUD/patient-details/patient-details.component';
import { PatientAddComponent } from './components/patient-CRUD/patient-add/patient-add.component';
import { PatientEditComponent } from './components/patient-CRUD/patient-edit/patient-edit.component';
import { DoctorAddComponent } from './components/doctor-CRUD/doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './components/doctor-CRUD/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './components/doctor-CRUD/doctor-edit/doctor-edit.component';
import { DoctorListComponent } from './components/doctor-CRUD/doctor-list/doctor-list.component';
import { PrescriptionAddComponent } from './components/Prescription-CRUD/prescription-add/prescription-add.component';
import { PrescriptionDetailsComponent } from './components/Prescription-CRUD/prescription-details/prescription-details.component';
import { PrescriptionEditComponent } from './components/Prescription-CRUD/prescription-edit/prescription-edit.component';
import { PrescriptionListComponent } from './components/Prescription-CRUD/prescription-list/prescription-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientAddComponent,
    PatientEditComponent,
    DoctorAddComponent,
    DoctorDetailsComponent,
    DoctorEditComponent,
    DoctorListComponent,
    PrescriptionAddComponent,
    PrescriptionDetailsComponent,
    PrescriptionEditComponent,
    PrescriptionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
