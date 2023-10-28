export interface PrescriptionOpdModel {
    id?: string; 
    prescriptionId?: string;
    patientID?: string;
    age?: number;
    gender?: string;
    doctorID?: string;
    opdID?: string;
    sessionID?: string;
    date?: Date;
    note?: string;
    startDate?: Date;
    endDate?: Date;
    noOfDates?: number;
    refills?: number;
    prescriptionMedications?: Prescription_OPD_Medication[]; 
}

export interface Prescription_OPD_Medication {
    id?: string; 
    prescriptionId?: string;
    medicationName?: string;
    dosage?: string;
    frequency?: string;
}
  
