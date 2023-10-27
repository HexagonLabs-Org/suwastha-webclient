import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddOpdsessionRequestModel } from 'src/app/Models/DTOs/add-opdsession-request.model';
import { UpdateOpdsessionRequestModel } from 'src/app/Models/DTOs/update-opdsession-request.model';
import { OpdsessionModel } from 'src/app/Models/Entities/opdsession.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpdsessionService {
  private JWT = localStorage.getItem('JWT');
  private AuthHeaders = new HttpHeaders().set('Authorization', `Bearer ${this.JWT}`);
  private apiUrl = environment.apiUrl + '/OPDSession'; // Update this to your API endpoint

  constructor(private http: HttpClient) { }

  getAllOPDSessions(): Observable<OpdsessionModel[]> {
    return this.http.get<OpdsessionModel[]>(`${this.apiUrl}`,{ headers: this.AuthHeaders });
  }

  getOPDSessionById(id: string): Observable<OpdsessionModel> {
    return this.http.get<OpdsessionModel>(`${this.apiUrl}/${id}`,{ headers: this.AuthHeaders });
  }

  getOPDSessionByOPDSessionID(opdsessionID: string): Observable<OpdsessionModel> {
    return this.http.get<OpdsessionModel>(`${this.apiUrl}/${opdsessionID}`,{ headers: this.AuthHeaders });
  }

  addOPDSession(request: AddOpdsessionRequestModel): Observable<OpdsessionModel> {
    return this.http.post<OpdsessionModel>(`${this.apiUrl}`, request,{ headers: this.AuthHeaders });
  }

  closeOPDSession(id: string, request: UpdateOpdsessionRequestModel): Observable<OpdsessionModel> {
    return this.http.put<OpdsessionModel>(`${this.apiUrl}/${id}`, request,{ headers: this.AuthHeaders });
  }

  getOPDSessionByOPDID(opdId: string): Observable<OpdsessionModel> {
    return this.http.get<OpdsessionModel>(`${this.apiUrl}/OPD/${opdId}`,{ headers: this.AuthHeaders });
  }

  getOPDSessionByDoctorID(doctorID: string): Observable<OpdsessionModel> {
    return this.http.get<OpdsessionModel>(`${this.apiUrl}/Doctor/${doctorID}`,{ headers: this.AuthHeaders });
  }

  getOPDSessionsByOPDIDAndDoctorID(opdId: string,doctorID: string): Observable<OpdsessionModel> {
    return this.http.get<OpdsessionModel>(`${this.apiUrl}/OPD/${opdId}/Doctor/${doctorID}`,{ headers: this.AuthHeaders });
  }
}
