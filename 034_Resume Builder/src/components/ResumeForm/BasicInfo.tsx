import React from 'react';
import { User, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { BasicInfo as BasicInfoType } from '../../types/resume';

interface BasicInfoProps {
  data: BasicInfoType;
  onChange: (data: Partial<BasicInfoType>) => void;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ data, onChange }) => {
  const handleChange = (field: keyof BasicInfoType) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange({ [field]: e.target.value });
  };

  return (
    <div className="form-card">
      <h2 className="form-title">
        <User size={24} />
        Basic Information
      </h2>
      
      <div className="form-grid">
        <div className="input-group">
          <label className="input-label">
            <User size={18} />
            Full Name
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={handleChange('fullName')}
            className="input"
            placeholder="John Doe"
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            <Mail size={18} />
            Email
          </label>
          <input
            type="email"
            value={data.email}
            onChange={handleChange('email')}
            className="input"
            placeholder="john@example.com"
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            <Phone size={18} />
            Phone
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={handleChange('phone')}
            className="input"
            placeholder="(123) 456-7890"
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            <MapPin size={18} />
            Address
          </label>
          <input
            type="text"
            value={data.address}
            onChange={handleChange('address')}
            className="input"
            placeholder="City, Country"
          />
        </div>

        <div className="input-group full-width">
          <label className="input-label">
            <FileText size={18} />
            Professional Summary
          </label>
          <textarea
            value={data.summary}
            onChange={handleChange('summary')}
            className="textarea"
            placeholder="Briefly describe your professional background and career goals..."
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;