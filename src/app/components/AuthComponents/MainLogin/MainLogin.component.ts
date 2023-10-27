import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthSectionloginrequest } from 'src/app/Models/DTOs/auth-sectionloginrequest';
import { AuthSectionloginresponse } from 'src/app/Models/DTOs/auth-sectionloginresponse';
import { LoginService } from 'src/app/services/Auth-Services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './MainLogin.component.html',
  styleUrls: ['./MainLogin.component.css']
})
export class MainLoginComponent {
  sectionLoginRequest: AuthSectionloginrequest = {
    SectionID: '',
    Password: ''
  };

  constructor(private router: Router,private loginService:LoginService,private spinner: NgxSpinnerService) {}

  login() {
    this.spinner.show(); // Show the spinner before making the API call

    this.loginService.login(this.sectionLoginRequest)
      .subscribe(
        (response: AuthSectionloginresponse) => {
          localStorage.setItem('JWT', response.Authentication.token);      
          localStorage.setItem('Section', JSON.stringify(response.SectionLogin));
          console.log(localStorage.getItem('JWT'));
          console.log(localStorage.getItem('Section'));

          // Hide the spinner after the API call is complete
          this.spinner.hide();

          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login error:', error);

          // Hide the spinner in case of an error
          this.spinner.hide();
        }
      );
  }
}
