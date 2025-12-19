import React from 'react';
import type { Appointment, Patient, Doctor } from '../types/types';

interface AppointmentListProps {
  appointments: Appointment[];
  patients: Patient[];
  doctors: Doctor[];
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments, patients, doctors }) => {
  const getPatientName = (patientId: number) => {
    const patient = patients.find(p => p.id === patientId);
    return patient ? patient.name : 'Unknown';
  };

  const getDoctorName = (doctorId: number) => {
    const doctor = doctors.find(d => d.id === doctorId);
    return doctor ? doctor.name : 'Unknown';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'status-blue';
      case 'Completed': return 'status-green';
      case 'Cancelled': return 'status-red';
      default: return 'status-gray';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Appointments</h2>
      </div>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date & Time</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{getPatientName(appointment.patientId)}</td>
                <td>Dr. {getDoctorName(appointment.doctorId)}</td>
                <td>
                  {appointment.date} at {appointment.time}
                </td>
                <td className="truncate">
                  {appointment.reason}
                </td>
                <td>
                  <span className={`status-badge ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;