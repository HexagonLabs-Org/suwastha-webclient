import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLoginComponent } from './components/AuthComponents/MainLogin/MainLogin.component';
import { TopbarComponent } from './components/LayoutComponents/header/header.component';
import { SidebarComponent } from './components/LayoutComponents/sidebar/sidebar.component';
import { DashboardComponent } from './components/LayoutComponents/dashboard/dashboard.component';
import { ProfileComponent } from './components/LayoutComponents/profile/profile.component';
import { SettingsComponent } from './components/LayoutComponents/settings/settings.component';
import { PatientListComponent } from './components/CRUDComponents/patient-CRUD/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/CRUDComponents/patient-CRUD/patient-details/patient-details.component';
import { PatientAddComponent } from './components/CRUDComponents/patient-CRUD/patient-add/patient-add.component';
import { PatientEditComponent } from './components/CRUDComponents/patient-CRUD/patient-edit/patient-edit.component';
import { DoctorAddComponent } from './components/CRUDComponents/doctor-CRUD/doctor-add/doctor-add.component';
import { DoctorDetailsComponent } from './components/CRUDComponents/doctor-CRUD/doctor-details/doctor-details.component';
import { DoctorEditComponent } from './components/CRUDComponents/doctor-CRUD/doctor-edit/doctor-edit.component';
import { DoctorListComponent } from './components/CRUDComponents/doctor-CRUD/doctor-list/doctor-list.component';
import { PrescriptionAddComponent } from './components/CRUDComponents/Prescription-CRUD/prescription-add/prescription-add.component';
import { PrescriptionDetailsComponent } from './components/CRUDComponents/Prescription-CRUD/prescription-details/prescription-details.component';
import { PrescriptionEditComponent } from './components/CRUDComponents/Prescription-CRUD/prescription-edit/prescription-edit.component';
import { PrescriptionListComponent } from './components/CRUDComponents/Prescription-CRUD/prescription-list/prescription-list.component';
import { OPDSessionAddComponent } from './components/CRUDComponents/OPDSession-CRUD/opdsession-add/opdsession-add.component';
import { OPDSessionDetailsComponent } from './components/CRUDComponents/OPDSession-CRUD/opdsession-details/opdsession-details.component';
import { OPDSessionEditComponent } from './components/CRUDComponents/OPDSession-CRUD/opdsession-edit/opdsession-edit.component';
import { OPDSessionListComponent } from './components/CRUDComponents/OPDSession-CRUD/opdsession-list/opdsession-list.component';
import { ClinicSessionAddComponent } from './components/CRUDComponents/ClinicSession-CRUD/clinic-session-add/clinic-session-add.component';
import { ClinicSessionDetailsComponent } from './components/CRUDComponents/ClinicSession-CRUD/clinic-session-details/clinic-session-details.component';
import { ClinicSessionEditComponent } from './components/CRUDComponents/ClinicSession-CRUD/clinic-session-edit/clinic-session-edit.component';
import { ClinicSessionListComponent } from './components/CRUDComponents/ClinicSession-CRUD/clinic-session-list/clinic-session-list.component';
import { OPDSessionLayoutComponent } from './components/LayoutComponents/opdsession-layout/opdsession-layout.component';
import { ClinicsessionLayoutComponent } from './components/LayoutComponents/clinicsession-layout/clinicsession-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClinicBookAddComponent } from './components/CRUDComponents/ClinicBook-CRUD/clinic-book-add/clinic-book-add.component';
import { ClinicBookDetailsComponent } from './components/CRUDComponents/ClinicBook-CRUD/clinic-book-details/clinic-book-details.component';
import { ClinicBookEditComponent } from './components/CRUDComponents/ClinicBook-CRUD/clinic-book-edit/clinic-book-edit.component';
import { ClinicBookListComponent } from './components/CRUDComponents/ClinicBook-CRUD/clinic-book-list/clinic-book-list.component';
import { PageAddComponent } from './components/CRUDComponents/Page-CRUD/page-add/page-add.component';
import { PageDetailsComponent } from './components/CRUDComponents/Page-CRUD/page-details/page-details.component';
import { PageEditComponent } from './components/CRUDComponents/Page-CRUD/page-edit/page-edit.component';
import { PageListComponent } from './components/CRUDComponents/Page-CRUD/page-list/page-list.component';
import { AdmissionAddComponent } from './components/CRUDComponents/Admission-CRUD/admission-add/admission-add.component';
import { AdmissionDetailsComponent } from './components/CRUDComponents/Admission-CRUD/admission-details/admission-details.component';
import { AdmissionEditComponent } from './components/CRUDComponents/Admission-CRUD/admission-edit/admission-edit.component';
import { AdmissionListComponent } from './components/CRUDComponents/Admission-CRUD/admission-list/admission-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLoginComponent,
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
    PrescriptionListComponent,
    OPDSessionAddComponent,
    OPDSessionDetailsComponent,
    OPDSessionEditComponent,
    OPDSessionListComponent,
    ClinicSessionAddComponent,
    ClinicSessionDetailsComponent,
    ClinicSessionEditComponent,
    ClinicSessionListComponent,
    OPDSessionLayoutComponent,
    ClinicsessionLayoutComponent,
    ClinicBookAddComponent,
    ClinicBookDetailsComponent,
    ClinicBookEditComponent,
    ClinicBookListComponent,
    PageAddComponent,
    PageDetailsComponent,
    PageEditComponent,
    PageListComponent,
    AdmissionAddComponent,
    AdmissionDetailsComponent,
    AdmissionEditComponent,
    AdmissionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
