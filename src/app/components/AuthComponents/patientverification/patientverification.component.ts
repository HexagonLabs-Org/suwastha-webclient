import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/Entities/patient.model';
import { PatientService } from 'src/app/services/CRUD-Services/patient.service';
import { DataService } from 'src/app/services/Shared-Services/data.service';

@Component({
  selector: 'app-patientverification',
  templateUrl: './patientverification.component.html',
  styleUrls: ['./patientverification.component.css']
})
export class PatientverificationComponent {
  patient : Patient = {}

  constructor(private patientService : PatientService,private router:Router,private dataService : DataService){}

  verifyPatient(){
    if(this.patient.patientID !== undefined)
    this.patientService.getPatientByPatientID(this.patient.patientID).subscribe(
      (patient) => {
        this.patient = patient;
        if(patient !== null){
          this.dataService.updatePatientData(patient); // Update the shared service with the patient data
          console.log(this.patient);
          this.router.navigate(['/OPD-Session/Start']);
        }
        else{
        }

      },
      (error) => {
      }
    );  
  }
}
