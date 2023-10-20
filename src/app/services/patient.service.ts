import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../Models/Entities/patient.model';
import { UpdatePatientRequest } from '../Models/DTOs/update-patient-request.model';
import { AddPatientRequest } from '../Models/DTOs/add-patient-request.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = environment.apiUrl + '/Patient'; // Update this to your API endpoint

  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}`);
  }

  getPatientById(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

  addPatient(patient: AddPatientRequest): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}`, patient);
  }

  updatePatient(id: string, patient: UpdatePatientRequest): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${id}`, patient);
  }

  deletePatient(id: string): Observable<Patient> {
    return this.http.delete<Patient>(`${this.apiUrl}/${id}`);
  }
}
