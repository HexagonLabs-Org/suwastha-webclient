import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddDoctorRequest } from 'src/app/Models/DTOs/add-doctor-request.model';
import { Doctor } from 'src/app/Models/Entities/doctor.model';
import { DoctorService } from 'src/app/services/CRUD-Services/doctor.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent {
  newDoctor: AddDoctorRequest = {
    rfid: '', // Initialize all properties with appropriate default values
    title: '',
    name: '',
    specialty: '',
    education: '',
    gender: '',
    dob: new Date(),
    tp: '',
    mobile1: '',
    mobile2: '',
    email: ''
  };

  constructor(private doctorService: DoctorService, private router : Router) {}

  addDoctor() {
    this.doctorService.addDoctor(this.newDoctor).subscribe(
      (addedDoctor: Doctor) => {
        this.router.navigate(['/home/doctors']);
        console.log('Doctor added:', addedDoctor);
      },
      (error) => {
        console.error('Error adding doctor:', error);
      }
    );
  }  
}
