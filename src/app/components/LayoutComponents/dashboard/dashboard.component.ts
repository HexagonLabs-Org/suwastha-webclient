import { Component, ElementRef, OnInit } from '@angular/core';
import { SectionloginModel } from 'src/app/Models/Entities/sectionlogin.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  havePrivilegeToUser : boolean = false;
  loggedInSection : SectionloginModel = {
    id: '',
    sectionID: '',
    rfid: null,
    sectionType: '',
    title: '',
    description: ''
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const storedObject = localStorage.getItem('Section');
    console.log('section',storedObject)
    if (storedObject !== null) {
      this.loggedInSection = JSON.parse(storedObject);
    } 
  }


  openNewSession() {
    if(this.loggedInSection.sectionType == "Clinic"){
      const url = '/Clinic-Session';
      window.open(url, '_blank');
    }
    else if(this.loggedInSection.sectionType == "OPD"){
      const url = '/OPD-Session';
      window.open(url, '_blank');
    }

  }
  
  links = [
    { text: 'Dashboard', route: '/home' , havePrivilegeToUser:true, icon : 'bxs-dashboard' , active:false},
    { text: 'Profile', route: '/home/profile', havePrivilegeToUser:true, icon: 'bx-store-alt', active:true},
    { text: 'Prescriptions', route: '/home/settings', havePrivilegeToUser:true, icon: 'bx-analyse', active:false},
    { text: 'Patients', route: '/home/patients', havePrivilegeToUser:true, icon: 'bx-message-square-dots', active:false},
    { text: 'Doctors', route: '/home/doctors', havePrivilegeToUser:true, icon: 'bx-group', active:false},
    { text: 'Settings', route: '/home/doctors', havePrivilegeToUser:true, icon: 'bx-cog', active:false}
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
