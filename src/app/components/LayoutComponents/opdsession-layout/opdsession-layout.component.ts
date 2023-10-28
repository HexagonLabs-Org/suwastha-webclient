import { Component, HostListener, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/Entities/doctor.model';
import { SectionloginModel } from 'src/app/Models/Entities/sectionlogin.model';
import { DataService } from 'src/app/services/Shared-Services/data.service';

@Component({
  selector: 'app-opdsession-layout',
  templateUrl: './opdsession-layout.component.html',
  styleUrls: ['./opdsession-layout.component.css'],
})
export class OPDSessionLayoutComponent implements OnInit {
  loggedInSection: SectionloginModel = {
    id: '',
    sectionID: '',
    rfid: null,
    sectionType: '',
    title: '',
    description: '',
  };

  verifiedDoctor: Doctor = {
    id: '',
    doctorID: '',
    title: '',
    name: '',
    specialty: '',
    education: '',
    gender: '',
    dob: new Date(),
    tp: '',
    mobile1: '',
    mobile2: '',
    email: '',
  };

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    //localStorage.removeItem('Doctor');
    const storedSection = localStorage.getItem('Section');
    console.log('section', storedSection);
    if (storedSection !== null) {
      this.loggedInSection = JSON.parse(storedSection);
    }

    const storedDoctor = localStorage.getItem('Doctor');
    if(storedDoctor !== null) {
      this.verifiedDoctor = JSON.parse(storedDoctor);
    }
  }

  // @HostListener('window:beforeunload', ['$event'])
  // onTabClose(event: BeforeUnloadEvent): void {
  //   localStorage.removeItem('Doctor');
  // }

  handleDoctorVerification(doctor: Doctor) {
    this.verifiedDoctor = doctor;
  }
}
