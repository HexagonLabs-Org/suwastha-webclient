import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthSectionloginrequest } from 'src/app/Models/DTOs/auth-sectionloginrequest';
import { AuthSectionloginresponse } from 'src/app/Models/DTOs/auth-sectionloginresponse';
import { LoginService } from 'src/app/services/Auth-Services/login.service';
import { TextToSpeechService } from 'src/app/services/Speech-Services/text-to-speech.service';

@Component({
  selector: 'app-auth',
  templateUrl: './MainLogin.component.html',
  styleUrls: ['./MainLogin.component.css']
})
export class MainLoginComponent implements OnInit{
  sectionLoginRequest: AuthSectionloginrequest = {
    SectionID: '',
    Password: ''
  };

  constructor(
    private router: Router,
    private loginService:LoginService,
    private spinner: NgxSpinnerService, 
    private textToSpeechService : TextToSpeechService,
    private toastr : ToastrService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.textToSpeechService.speakWelcomeMessage().subscribe(
      () => {
        console.log('Text has been spoken successfully.');
      },
      (error) => {
        console.error('Text-to-speech error:', error);
      }
    );
  }

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
          console.error('Login Failed:', error);

          // Hide the spinner in case of an error
          this.spinner.hide();
          this.toastr.error('Please check your credentials.', 'Login Error');
        }
      );
  }
}
