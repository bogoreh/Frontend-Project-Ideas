import React from 'react';
import { Plus, Trash2, Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '../../types/resume';

interface ExperienceProps {
  data: ExperienceType[];
  onChange: (experience: ExperienceType[]) => void;
}

const Experience: React.FC<ExperienceProps> = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience: ExperienceType = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    onChange([...data, newExperience]);
  };

  const updateExperience = (id: string, field: keyof ExperienceType, value: string) => {
    onChange(data.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };

  const removeExperience = (id: string) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <h2 className="form-title">
          <Briefcase size={24} />
          Work Experience
        </h2>
        <button onClick={addExperience} className="add-button">
          <Plus size={20} />
          Add Experience
        </button>
      </div>

      <div className="form-list">
        {data.map((exp, index) => (
          <div key={exp.id} className="form-item">
            <div className="form-item-header">
              <h3 className="form-item-title">Experience #{index + 1}</h3>
              <button
                onClick={() => removeExperience(exp.id)}
                className="remove-button"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="form-grid">
              <div className="input-group">
                <label className="input-label">Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  className="input"
                  placeholder="Company Name"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Position</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                  className="input"
                  placeholder="Job Title"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Start Date</label>
                <input
                  type="text"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  className="input"
                  placeholder="2022"
                />
              </div>

              <div className="input-group">
                <label className="input-label">End Date</label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                  className="input"
                  placeholder="Present"
                />
              </div>

              <div className="input-group full-width">
                <label className="input-label">Description</label>
                <textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                  className="textarea"
                  placeholder="Describe your responsibilities and achievements..."
                  rows={4}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;