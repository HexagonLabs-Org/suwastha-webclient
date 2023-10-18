export interface UpdatePatientRequest {
  rfid?: string;
  nic?: string;
  title?: string;
  name?: string;
  gender?: string;
  dob?: Date;
  address?: string;
  tp?: string;
  mobile1?: string;
  mobile2?: string;
  email?: string;
  emergencyContactNumber?: string;
  bloodGroup?: string;
  isInpatient?: boolean;
  vitalStatus?: 'Alive' | 'Deceased' | 'Critical' | 'Serious' | 'Stable' | 'Improving' | 'Worsening' | 'Discharged';
  registeredBy?: string;
}
