import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../../Models/Entities/doctor.model';
import { AddDoctorRequest } from '../../Models/DTOs/add-doctor-request.model';
import { UpdateDoctorRequest } from '../../Models/DTOs/update-doctor-request.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private JWT = localStorage.getItem('JWT');
  private AuthHeaders = new HttpHeaders().set('Authorization', `Bearer ${this.JWT}`);
  private apiUrl = environment.apiUrl + '/Doctor'; // Update this to your API endpoint

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}`,{ headers: this.AuthHeaders });
  }

  getDoctorByGuid(id: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${id}`,{ headers: this.AuthHeaders });
  }

  getDoctorByDoctorID(doctorID: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/${doctorID}`,{ headers: this.AuthHeaders });
  }

  addDoctor(addDoctorRequest: AddDoctorRequest): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiUrl}`, addDoctorRequest,{ headers: this.AuthHeaders });
  }

  updateDoctor(id: string, updateDoctorRequest: UpdateDoctorRequest): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiUrl}/${id}`, updateDoctorRequest,{ headers: this.AuthHeaders });
  }

  deleteDoctor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`,{ headers: this.AuthHeaders });
  }
}
