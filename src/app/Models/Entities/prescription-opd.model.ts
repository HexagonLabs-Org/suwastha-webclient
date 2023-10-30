import { PrescriptionOpdMedicationModel } from "./prescription-opd-medication.model";

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
    medications?: PrescriptionOpdMedicationModel[]; 
}
