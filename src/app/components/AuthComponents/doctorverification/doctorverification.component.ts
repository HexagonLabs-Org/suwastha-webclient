import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/Entities/doctor.model';
import { DoctorService } from 'src/app/services/CRUD-Services/doctor.service';
import { DataService } from 'src/app/services/Shared-Services/data.service';


@Component({
  selector: 'app-doctorverification',
  templateUrl: './doctorverification.component.html',
  styleUrls: ['./doctorverification.component.css']
})
export class DoctorverificationComponent {

  doctor : Doctor = {
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
    email: ''
  }

  constructor(private doctorService : DoctorService,private router:Router,private dataService : DataService){}

  verifyDoctor(){
    this.doctorService.getDoctorByDoctorID(this.doctor.doctorID).subscribe(
      (doctor) => {
        this.doctor = doctor;
        if(doctor !== null){
          localStorage.setItem("Doctor", JSON.stringify(doctor));
          this.dataService.updateDoctorData(doctor); // Update the shared service with the doctor data
          console.log(this.doctor);
          this.router.navigate(['/OPD-Session/Start']);
        }
        else{
        }

      },
      (error) => {
      }
    );  }
}
