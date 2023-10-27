import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Doctor } from 'src/app/Models/Entities/doctor.model';
import { Patient } from 'src/app/Models/Entities/patient.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private doctorData = new BehaviorSubject<Doctor>({});
  doctorData$ = this.doctorData.asObservable();
  private patientData = new BehaviorSubject<Patient>({});
  patientData$ = this.patientData.asObservable();


  updateDoctorData(data: Doctor) {
    this.doctorData.next(data);
  }

  updatePatientData(data:Patient) {
    this.doctorData.next(data);
  }
}
