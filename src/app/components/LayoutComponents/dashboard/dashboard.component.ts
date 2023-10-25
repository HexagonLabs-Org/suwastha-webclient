import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  havePrivilegeToUser : boolean = false;

  constructor(private el: ElementRef) {}

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
  
  links = [
    { text: 'Dashboard', route: '/home' , havePrivilegeToUser:true, icon : 'bxs-dashboard' , active:false},
    { text: 'Profile', route: '/home/profile', havePrivilegeToUser:true, icon: 'bx-store-alt', active:true},
    { text: 'Settings', route: '/home/settings', havePrivilegeToUser:true, icon: 'bx-analyse', active:false},
    { text: 'Patients', route: '/home/patients', havePrivilegeToUser:true, icon: 'bx-message-square-dots', active:false},
    { text: 'Doctors', route: '/home/doctors', havePrivilegeToUser:true, icon: 'bx-group', active:false},
    { text: 'Doctors', route: '/home/doctors', havePrivilegeToUser:true, icon: 'bx-cog', active:false}
  ];


  toggleTheme() {
    const checkbox = this.el.nativeElement.querySelector('#theme-toggle');
    const body = document.body;

    if (checkbox.checked) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }

  setActiveLink(clickedLink:any) {

    for (const link of this.links) {
      link.active = false;
    }
    clickedLink.active = true;
  }

  isSidebarClosed: boolean = false;

  toggleSidebar() {
    const sideBar = this.el.nativeElement.querySelector('#sidebar');
    this.isSidebarClosed = !this.isSidebarClosed;
    if(this.isSidebarClosed){
      sideBar.classList.add('close');
    }
    else{
      sideBar.classList.remove('close');
    }
    console.log(this.isSidebarClosed);
  }
}
