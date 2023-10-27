import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/Entities/doctor.model';
import { DoctorService } from 'src/app/services/CRUD-Services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.loadDoctorList();
  }

  loadDoctorList() {
    this.doctorService.getAllDoctors().subscribe((doctors: Doctor[]) => {
      this.doctors = doctors;
    });
  }

  deleteDoctor(doctor: Doctor) {
    if(doctor.id !== undefined)
    this.doctorService.deleteDoctor(doctor.id).subscribe(() => {
      // Optionally, update the doctors list or perform other actions after deletion
      this.loadDoctorList();
    });
  }
  
}
