interface ClinicsessionModel {
    id: string | null;
    sessionID: string | null;
    clinicID: string | null;
    doctorID: string | null;
    startedAt: Date | null;
    description: string | null;
    specialNotes: string | null;
    closedAt: Date | null;
    isActive: boolean | null;
    closingNote: string | null;
}

