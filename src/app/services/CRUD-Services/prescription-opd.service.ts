import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddPrescriptionOpdRequestModel } from 'src/app/Models/DTOs/add-prescription-opd-request.model';
import { PrescriptionOpdModel } from 'src/app/Models/Entities/prescription-opd.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionOpdService {
  private JWT = localStorage.getItem('JWT');
  private AuthHeaders = new HttpHeaders().set('Authorization', `Bearer ${this.JWT}`);
  private apiUrl = environment.apiUrl + '/PrescriptionOPD'; // Update this to your API endpoint

  constructor(private http: HttpClient) { }

  addPrecriptionOPD(prescription: AddPrescriptionOpdRequestModel): Observable<PrescriptionOpdModel> {
    return this.http.post<PrescriptionOpdModel>(`${this.apiUrl}`, prescription,{ headers: this.AuthHeaders });
  }

}
