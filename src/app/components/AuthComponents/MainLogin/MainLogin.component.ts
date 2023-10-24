import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './MainLogin.component.html',
  styleUrls: ['./MainLogin.component.css']
})
export class MainLoginComponent {
  constructor(private router: Router) {}

  login(){
    localStorage.setItem('jwtToken', "");
  }

  goToClinic(){
    localStorage.setItem('SectionType', "Clinic");
    this.router.navigate(['/home']);
  }

  goToOPD(){
    localStorage.setItem('SectionType', "OPD");
    this.router.navigate(['/home']);
  }

  goToETU(){
    localStorage.setItem('SectionType', "ETU");
    this.router.navigate(['/home']);
  }

  goToWard(){
    localStorage.setItem('SectionType', "Ward");
    this.router.navigate(['/home']);
  }
}
