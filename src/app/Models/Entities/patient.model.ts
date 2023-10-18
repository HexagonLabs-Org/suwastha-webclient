export interface Patient {
    id?: string;
    patientID?: string | undefined;
    rfid?: string;
    nic?: string;
    title?: string;
    name?: string;
    gender?: string;
    dob?: Date | undefined;
    address?: string;
    tp?: string;
    mobile1?: string;
    mobile2?: string;
    email?: string;
    emergencyContactNumber?: string;
    bloodGroup?: string;
    isInpatient?: boolean | false;
    vitalStatus?: 'Alive' | 'Deceased' | 'Critical' | 'Serious' | 'Stable' | 'Improving' | 'Worsening' | 'Discharged';
    registeredBy?: string;
  }
  