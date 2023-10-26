import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthSectionloginrequest } from 'src/app/Models/DTOs/auth-sectionloginrequest';
import { AuthSectionloginresponse } from 'src/app/Models/DTOs/auth-sectionloginresponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiUrl + '/SectionLogin'; // Update this to your API endpoint

  constructor(private http: HttpClient) { }

  login(sectionLoginRequest: AuthSectionloginrequest): Observable<AuthSectionloginresponse> {
    return this.http.post<AuthSectionloginresponse>(`${this.apiUrl}/Login`, sectionLoginRequest);
  }
}
