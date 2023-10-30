import { Medication } from "./medication.model";

export interface AddPrescriptionOpdRequestModel {
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
    medications?: Medication[]; 
}
