import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/Entities/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{
  patients: Patient[]= [];

  constructor(private patientService: PatientService,private router: Router) { }

  loadPatientsList(){
    this.patientService.getAllPatients().subscribe(patients => {
      this.patients = patients;
      console.log(patients);
    });
  }
  ngOnInit() {
    this.loadPatientsList();
  }

  deletePatient(patient: Patient) {
    console.log(patient);
    if (confirm('Are you sure you want to delete this patient?') && patient.id !== undefined) {
      this.patientService.deletePatient(patient.id)
        .subscribe(() => {
          this.loadPatientsList();
        });
    }
  }
}
