export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  contact: string;
  address: string;
  medicalHistory: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  contact: string;
  availability: string;
}

export interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  date: string;
  time: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  reason: string;
}