import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Models/Entities/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent {
  patient: Patient = {};

  constructor(private route: ActivatedRoute, private router: Router, private patientService: PatientService,private location: Location) {
  }

  savePatient() {
    if (this.patient.id !== undefined) 
    {
      this.patientService.updatePatient(this.patient.id, this.patient)
        .subscribe((result) => {
          this.router.navigate(['/home/patients']);
        }, (error) => {
          console.error('Error:', error);
        });
    } else {
      // Handle the case when id is not defined (e.g., show an error message or handle accordingly)
    }
  }

  cancelEdit() {
    this.location.back();
  }

  ngOnInit(): void {
    // Get the patient ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      // Call the service to get patient details by ID
      this.patientService.getPatientById(id).subscribe(
        (patient) => {
          this.patient = patient;
          console.log(patient);
        },
        (error) => {
          console.error('Error fetching patient details:', error);
          // Handle the error, e.g., display an error message or redirect to an error page.
        }
      );
    } else {
      console.error('Patient ID is null');
      // Handle the case when 'id' is null, e.g., display an error message or redirect to an error page.
    }
  }
}
