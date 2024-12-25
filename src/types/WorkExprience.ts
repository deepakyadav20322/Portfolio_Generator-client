export interface WorkExperience {
    id: string
    jobTitle: string;
    companyName: string;
    location: string;
    startDate: string;
    endDate?: string;
    isCurrentRole?: boolean;
    description: string;
    
  }