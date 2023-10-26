import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/CRUD-Services/patient.service';
import { Patient } from 'src/app/Models/Entities/patient.model';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient : Patient = {};

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get the patient ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      // Call the service to get patient details by ID
      this.patientService.getPatientById(id).subscribe(
        (patient) => {
          this.patient = patient;
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
  calculateAge(dateOfBirth?: Date): string[] {
    if (!dateOfBirth || dateOfBirth === undefined ) return ['N/A','N/A','N/A'];
  
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      const lastMonth = new Date(today);
      lastMonth.setMonth(today.getMonth() - 1);
  
      const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days = daysInLastMonth - birthDate.getDate() + today.getDate();
      months--;
  
      if (months < 0) {
        months = 11;
        years--;
      }
    }
  
    const yearsString = years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : '0 years';
    const monthsString = months > 0 ? `${months} ${months === 1 ? 'month' : 'months'}` : '0 months';
    const daysString = days > 0 ? `${days} ${days === 1 ? 'day' : 'days'}` : '0 days';
  
    const ageArray = [yearsString, monthsString, daysString].filter((part) => part.length > 0);
  
    return ageArray;
  }
  
  deletePatient() {
    if (confirm('Are you sure you want to delete this patient?') && this.patient.id !== undefined) {
      this.patientService.deletePatient(this.patient.id)
        .subscribe(() => {
          // Redirect to the patient list after successful deletion
          this.router.navigate(['/home/patients']);
        });
    }
  }
}
