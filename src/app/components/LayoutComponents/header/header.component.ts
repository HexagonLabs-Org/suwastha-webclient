import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class TopbarComponent {
  SectionType = localStorage.getItem("SectionType");

  openNewSession() {
    if(this.SectionType == "Clinic"){
      const url = '/Clinic-Session';
      window.open(url, '_blank');
    }
    else if(this.SectionType == "OPD"){
      const url = '/OPD-Session';
      window.open(url, '_blank');
    }

  }
}
