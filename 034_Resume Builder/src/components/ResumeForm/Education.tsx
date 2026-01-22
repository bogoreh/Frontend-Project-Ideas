import React from 'react';
import { Plus, Trash2, GraduationCap } from 'lucide-react';
import { Education as EducationType } from '../../types/resume';

interface EducationProps {
  data: EducationType[];
  onChange: (education: EducationType[]) => void;
}

const Education: React.FC<EducationProps> = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation: EducationType = {
      id: Date.now().toString(),
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    onChange([...data, newEducation]);
  };

  const updateEducation = (id: string, field: keyof EducationType, value: string) => {
    onChange(data.map(edu => edu.id === id ? { ...edu, [field]: value } : edu));
  };

  const removeEducation = (id: string) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <h2 className="form-title">
          <GraduationCap size={24} />
          Education
        </h2>
        <button onClick={addEducation} className="add-button">
          <Plus size={20} />
          Add Education
        </button>
      </div>

      <div className="form-list">
        {data.map((edu, index) => (
          <div key={edu.id} className="form-item">
            <div className="form-item-header">
              <h3 className="form-item-title">Education #{index + 1}</h3>
              <button
                onClick={() => removeEducation(edu.id)}
                className="remove-button"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="form-grid">
              <div className="input-group">
                <label className="input-label">School/University</label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                  className="input"
                  placeholder="University Name"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  className="input"
                  placeholder="Bachelor of Science"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Field of Study</label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                  className="input"
                  placeholder="Computer Science"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Start Date</label>
                <input
                  type="text"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                  className="input"
                  placeholder="2018"
                />
              </div>

              <div className="input-group">
                <label className="input-label">End Date</label>
                <input
                  type="text"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                  className="input"
                  placeholder="2022"
                />
              </div>

              <div className="input-group full-width">
                <label className="input-label">Description</label>
                <textarea
                  value={edu.description}
                  onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                  className="textarea"
                  placeholder="Describe your achievements, coursework, or honors..."
                  rows={3}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;