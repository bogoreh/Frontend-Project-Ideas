import React from 'react';
import type { Doctor } from '../types/types';

interface DoctorListProps {
  doctors: Doctor[];
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors }) => {
  return (
    <div className="card">
      <h2>Doctors</h2>
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-header">
              <div className="doctor-icon">
                <span>Dr.</span>
              </div>
              <div>
                <h3>{doctor.name}</h3>
                <p>{doctor.specialization}</p>
              </div>
            </div>
            <div className="doctor-info">
              <p>
                <strong>Contact:</strong> {doctor.contact}
              </p>
              <p>
                <strong>Availability:</strong> {doctor.availability}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;