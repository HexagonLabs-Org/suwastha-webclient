import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Models/Entities/doctor.model';
import { OpdsessionModel } from 'src/app/Models/Entities/opdsession.model';
import { PrescriptionOpdModel, Prescription_OPD_Medication } from 'src/app/Models/Entities/prescription-opd.model';
import { SectionloginModel } from 'src/app/Models/Entities/sectionlogin.model';

@Component({
  selector: 'app-prescription-opd-add',
  templateUrl: './prescription-opd-add.component.html',
  styleUrls: ['./prescription-opd-add.component.css']
})
export class PrescriptionOpdAddComponent implements OnInit{
  loggedInSection: SectionloginModel = {}
  verifiedDoctor : Doctor = {}
  currentSession : OpdsessionModel = {}

  newPrescription: PrescriptionOpdModel = {};
  newMedications: Prescription_OPD_Medication[] = [];
  medication : Prescription_OPD_Medication = {}

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
    this.newPrescription.opdID = this.verifiedDoctor.doctorID;

    if(currentSession !== null)
    this.currentSession = JSON.parse(currentSession);
    if(this.currentSession.sessionID)
    this.newPrescription.opdID = this.currentSession.sessionID;
  }

  addPrescription() {
    // Handle the logic to add a new prescription here
    // You can access the newPrescription and newMedication objects to save data
  }

  addMedication() {
    this.newMedications.push({...this.medication }); // Copy the newMedication object
    this.medication = {}; // Clear the newMedication object for the next entry
  }

  loadMedicationToForm(medication:Prescription_OPD_Medication) {
    this.medication = medication;
  }

  removeMedication(medication:Prescription_OPD_Medication) {
    const indexToRemove = this.newMedications.indexOf(medication);
    this.newMedications.splice(indexToRemove, 1);
  }

  updateMedication(medication:Prescription_OPD_Medication) {
    const indexToUpdate = this.newMedications.indexOf(medication);
    this.newMedications[indexToUpdate] = medication;
  }

  clearMedications() {
    this.newMedications = [];
  }

}
