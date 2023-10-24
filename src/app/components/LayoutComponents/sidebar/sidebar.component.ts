import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  havePrivilegeToUser : boolean = false;

  links = [
    { text: 'Dashboard', route: '/home' , havePrivilegeToUser:true},
    { text: 'Profile', route: '/home/profile', havePrivilegeToUser:true},
    { text: 'Settings', route: '/home/settings', havePrivilegeToUser:true},
    { text: 'Patients', route: '/home/patients', havePrivilegeToUser:true},
    { text: 'Doctors', route: '/home/doctors', havePrivilegeToUser:true}
  ];
}
