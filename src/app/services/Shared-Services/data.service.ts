import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Doctor } from 'src/app/Models/Entities/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private doctorData = new BehaviorSubject<Doctor>({
    id: '',
    doctorID: '',
    title: '',
    name: '',
    specialty: '',
    education: '',
    gender: '',
    dob: new Date(),
    tp: '',
    mobile1: '',
    mobile2: '',
    email: ''
  });
  doctorData$ = this.doctorData.asObservable();

  updateDoctorData(data: Doctor) {
    this.doctorData.next(data);
  }
}
