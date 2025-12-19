import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import DoctorList from './components/DoctorList';
import AppointmentList from './components/AppointmentList';
import type { Patient, Doctor, Appointment } from './types/types';
import './App.css';

const App: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: 'John Doe', age: 45, gender: 'Male', contact: '123-456-7890', address: '123 Main St', medicalHistory: 'Hypertension' },
    { id: 2, name: 'Jane Smith', age: 32, gender: 'Female', contact: '987-654-3210', address: '456 Oak Ave', medicalHistory: 'Diabetes' },
  ]);

  const [doctors] = useState<Doctor[]>([  // Removed setDoctors since it's unused
    { id: 1, name: 'Robert Johnson', specialization: 'Cardiology', contact: '555-0101', availability: 'Mon-Fri, 9AM-5PM' },
    { id: 2, name: 'Sarah Williams', specialization: 'Pediatrics', contact: '555-0102', availability: 'Mon-Wed, 10AM-4PM' },
    { id: 3, name: 'Michael Brown', specialization: 'Orthopedics', contact: '555-0103', availability: 'Tue-Thu, 8AM-6PM' },
  ]);

  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, patientId: 1, doctorId: 1, date: '2024-01-15', time: '10:00 AM', status: 'Scheduled', reason: 'Heart checkup' },
    { id: 2, patientId: 2, doctorId: 2, date: '2024-01-16', time: '2:00 PM', status: 'Completed', reason: 'Annual physical' },
  ]);

  const handleAddPatient = (newPatient: Omit<Patient, 'id'>) => {
    const newPatientWithId: Patient = {
      ...newPatient,
      id: patients.length > 0 ? Math.max(...patients.map(p => p.id)) + 1 : 1
    };
    setPatients([...patients, newPatientWithId]);
  };

  useEffect(() => {
    // Initialize sample data if empty
    if (patients.length === 0) {
      setPatients([
        { id: 1, name: 'John Doe', age: 45, gender: 'Male', contact: '123-456-7890', address: '123 Main St', medicalHistory: 'Hypertension' },
      ]);
    }
  }, []);

  return (
    <div className="app">
      <Header />
      
      <main className="main-container">
        <div className="main-grid">
          {/* Left Column */}
          <div className="left-column">
            <section>
              <h2>Patient Management</h2>
              <PatientForm onSubmit={handleAddPatient} />
            </section>

            <section>
              <PatientList patients={patients} />
            </section>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <section>
              <DoctorList doctors={doctors} />
            </section>

            <section>
              <AppointmentList 
                appointments={appointments} 
                patients={patients} 
                doctors={doctors} 
              />
            </section>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Patients</h3>
            <p className="stat-number">{patients.length}</p>
          </div>
          
          <div className="stat-card">
            <h3>Available Doctors</h3>
            <p className="stat-number">{doctors.length}</p>
          </div>
          
          <div className="stat-card">
            <h3>Active Appointments</h3>
            <p className="stat-number">
              {appointments.filter(a => a.status === 'Scheduled').length}
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2024 Hospital Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;