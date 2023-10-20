import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../Models/Entities/doctor.model';
import { AddDoctorRequest } from '../Models/DTOs/add-doctor-request.model';
import { UpdateDoctorRequest } from '../Models/DTOs/update-doctor-request.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = environment.apiUrl + '/Doctor'; // Update this to your API endpoint

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}`);
  }

  getDoctorByGuid(id: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${id}`);
  }

  getDoctorByDoctorID(doctorID: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${doctorID}`);
  }

  addDoctor(addDoctorRequest: AddDoctorRequest): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiUrl}`, addDoctorRequest);
  }

  updateDoctor(id: string, updateDoctorRequest: UpdateDoctorRequest): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/${id}`, updateDoctorRequest);
  }

  deleteDoctor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
