export interface OpdsessionModel{
    id: string | null;
    sessionID: string | null;
    opdID: string | null;
    doctorID: string | null;
    startedAt: Date | null;
    description: string | null;
    specialNotes: string | null;
    closedAt: Date | null;
    isActive: boolean | null;
    closingNote: string | null;
}

