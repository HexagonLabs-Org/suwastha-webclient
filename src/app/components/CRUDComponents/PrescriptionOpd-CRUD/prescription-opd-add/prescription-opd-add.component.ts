import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddPrescriptionOpdRequestModel } from 'src/app/Models/DTOs/add-prescription-opd-request.model';
import { Doctor } from 'src/app/Models/Entities/doctor.model';
import { OpdsessionModel } from 'src/app/Models/Entities/opdsession.model';
import { Patient } from 'src/app/Models/Entities/patient.model';
import { PrescriptionOpdMedicationModel } from 'src/app/Models/Entities/prescription-opd-medication.model';
import { PrescriptionOpdModel } from 'src/app/Models/Entities/prescription-opd.model';
import { SectionloginModel } from 'src/app/Models/Entities/sectionlogin.model';
import { PatientService } from 'src/app/services/CRUD-Services/patient.service';
import { PrescriptionOpdService } from 'src/app/services/CRUD-Services/prescription-opd.service';

@Component({
  selector: 'app-prescription-opd-add',
  templateUrl: './prescription-opd-add.component.html',
  styleUrls: ['./prescription-opd-add.component.css']
})
export class PrescriptionOpdAddComponent implements OnInit{

  constructor(private patientService:PatientService, private prescriptionOpdService : PrescriptionOpdService){}
  medicationNameInput!: HTMLInputElement;
  dosageInput!: HTMLInputElement;
  frequencyInput!: HTMLInputElement;
  
  loggedInSection: SectionloginModel = {}
  verifiedDoctor : Doctor = {}
  currentSession : OpdsessionModel = {}

  newPrescription: AddPrescriptionOpdRequestModel = {};
  newMedications: PrescriptionOpdMedicationModel[] = [];
  medication : PrescriptionOpdMedicationModel = {};
  patient : Patient = {};
  patientAge : number | undefined
  IsPatientVerified : boolean = false;
  IsAddMedicationMode : boolean = true;
  addedPrescription : PrescriptionOpdModel = {}

  ngOnInit(): void {
    const loggedInSection = localStorage.getItem('Section');
    const verifiedDoctor = localStorage.getItem('Doctor');
    const currentSession = localStorage.getItem('CurrentSession');
    // console.log('loggedInSection'+ loggedInSection);
    // console.log('verifiedDoctor'+verifiedDoctor);
    // console.log('currentSession'+currentSession);

    if(loggedInSection !== null)
    this.loggedInSection = JSON.parse(loggedInSection);
    if(this.loggedInSection.sectionID)
    this.newPrescription.opdID = this.loggedInSection.sectionID;

    if(verifiedDoctor !== null)
    this.verifiedDoctor = JSON.parse(verifiedDoctor);
    if(this.verifiedDoctor.doctorID)
    this.newPrescription.doctorID = this.verifiedDoctor.doctorID;

    if(currentSession !== null)
    this.currentSession = JSON.parse(currentSession);
    if(this.currentSession.sessionID)
    this.newPrescription.sessionID = this.currentSession.sessionID;
  }

  addPrescription() {
    this.newPrescription.medications = this.newMedications;
    this.newPrescription.patientID = this.patient.patientID;
    this.newPrescription.age = this.patientAge;
    this.newPrescription.gender = this.patient.gender;
    this.newPrescription.date = new Date();

    //dummy data (to be removed)
    this.newPrescription.startDate = new Date();
    this.newPrescription.endDate = new Date();

    console.log(this.newPrescription);

    this.prescriptionOpdService.addPrecriptionOPD(this.newPrescription).subscribe(
      (addedPrescription) => {
        this.addedPrescription = addedPrescription;
        console.log('Patient added:', this.addedPrescription);
      },
      (error) => {
        console.error('Error adding patient:', error);
      }
    );
  }

  addMedication() {
    this.newMedications.push({...this.medication }); // Copy the newMedication object
    this.medication = {}; // Clear the newMedication object for the next entry
  }

  loadPatient() {
    const patient = localStorage.getItem("Patient");
    if(patient)
    {
      this.patient = JSON.parse(patient);
      this.IsPatientVerified = true;
      console.log(this.patient)
      return;

    }
    else{
      if (this.patient.id !== undefined) {
        this.patientService.getPatientById(this.patient.id).subscribe(
          (patient) => {
            this.patient = patient;
            this.IsPatientVerified = true;
            localStorage.setItem("Patient" , JSON.stringify(this.patient));
          },
          (error) => {
            console.error('Error fetching patient details:', error);
            this.IsPatientVerified = false;
          }
        );
      } 
    }

  }

  loadMedicationToForm(medication:PrescriptionOpdMedicationModel) {
    this.medication = medication;
    this.IsAddMedicationMode = false;
  }

  removeMedication(medication:PrescriptionOpdMedicationModel) {
    const indexToRemove = this.newMedications.indexOf(medication);
    this.newMedications.splice(indexToRemove, 1);
  }

  updateMedication() {
    const indexToUpdate = this.newMedications.indexOf(this.medication);
    this.newMedications[indexToUpdate] = this.medication;
    this.medication = {}
  }

  medicationFormSubmit(){
    if(this.IsAddMedicationMode){
      this.addMedication()
    }
    else{
      this.updateMedication();
    }
  }

  clearMedications() {
    this.newMedications = [];
  }

  focusNext(nextInput: HTMLInputElement) {
    nextInput.focus();
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

    this.patientAge = years;
  
    const yearsString = years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : '0 years';
    const monthsString = months > 0 ? `${months} ${months === 1 ? 'month' : 'months'}` : '0 months';
    const daysString = days > 0 ? `${days} ${days === 1 ? 'day' : 'days'}` : '0 days';
  
    const ageArray = [yearsString, monthsString, daysString].filter((part) => part.length > 0);
  
    return ageArray;
  }
}
