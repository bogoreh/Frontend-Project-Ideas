import React from 'react';
import type { Patient } from '../types/types';

interface PatientListProps {
  patients: Patient[];
}

const PatientList: React.FC<PatientListProps> = ({ patients }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Patients List</h2>
        <p>Total Patients: {patients.length}</p>
      </div>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Medical History</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td><strong>{patient.name}</strong></td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.contact}</td>
                <td className="truncate">
                  {patient.medicalHistory || 'None'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;