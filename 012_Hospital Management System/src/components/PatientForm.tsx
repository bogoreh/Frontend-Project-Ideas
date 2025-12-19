import React, { useState } from 'react';
import type { Patient } from '../types/types';

interface PatientFormProps {
  onSubmit: (patient: Omit<Patient, 'id'>) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Omit<Patient, 'id'>>({
    name: '',
    age: 0,
    gender: 'Male',
    contact: '',
    address: '',
    medicalHistory: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      age: 0,
      gender: 'Male',
      contact: '',
      address: '',
      medicalHistory: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add New Patient</h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Contact</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label>Medical History</label>
          <textarea
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            rows={3}
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        Add Patient
      </button>
    </form>
  );
};

export default PatientForm;