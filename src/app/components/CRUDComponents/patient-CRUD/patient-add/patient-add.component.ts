import { Component } from '@angular/core';
import { AddPatientRequest } from 'src/app/Models/DTOs/add-patient-request.model';
import { FormsModule } from '@angular/forms';
import { PatientService } from 'src/app/services/CRUD-Services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent {
  newPatient : AddPatientRequest = {}
  
  constructor(private patientService: PatientService, private router: Router) {}

  addPatient() {
    this.patientService.addPatient(this.newPatient).subscribe(
      (addedPatient) => {
        this.router.navigate(['/home/patients']); // Redirect to the patients route
        console.log('Patient added:', addedPatient);
      },
      (error) => {
        console.error('Error adding patient:', error);
      }
    );
  }
}
