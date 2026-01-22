export interface BasicInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
}

export interface ResumeData {
  basicInfo: BasicInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
}