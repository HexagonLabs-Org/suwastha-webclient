import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../Models/Entities/patient.model';
import { UpdatePatientRequest } from '../Models/DTOs/update-patient-request.model';
import { AddPatientRequest } from '../Models/DTOs/add-patient-request.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private JWT = localStorage.getItem('JWT');
  private AuthHeaders = new HttpHeaders().set('Authorization', `Bearer ${this.JWT}`);
  private apiUrl = environment.apiUrl + '/Patient'; // Update this to your API endpoint

  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}`,{ headers: this.AuthHeaders });
  }

  getPatientById(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`,{ headers: this.AuthHeaders });
  }

  addPatient(patient: AddPatientRequest): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}`, patient,{ headers: this.AuthHeaders });
  }

  updatePatient(id: string, patient: UpdatePatientRequest): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${id}`, patient,{ headers: this.AuthHeaders });
  }

  deletePatient(id: string): Observable<Patient> {
    return this.http.delete<Patient>(`${this.apiUrl}/${id}`,{ headers: this.AuthHeaders });
  }
}
