import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './MainLogin.component.html',
  styleUrls: ['./MainLogin.component.css']
})
export class MainLoginComponent {

  login(){
    localStorage.setItem('jwtToken', "");
  }
}
