import React from 'react';
import { Plus, Trash2, Star } from 'lucide-react';
import { Skill } from '../../types/resume';

interface SkillsProps {
  data: Skill[];
  onChange: (skills: Skill[]) => void;
}

const Skills: React.FC<SkillsProps> = ({ data, onChange }) => {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 3
    };
    onChange([...data, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: string | number) => {
    onChange(data.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  const removeSkill = (id: string) => {
    onChange(data.filter(skill => skill.id !== id));
  };

  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`star ${i < level ? 'filled' : 'empty'}`}
        onClick={() => updateSkill(id, 'level', i + 1)}
      />
    ));
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <h2 className="form-title">
          <Star size={24} />
          Skills
        </h2>
        <button onClick={addSkill} className="add-button">
          <Plus size={20} />
          Add Skill
        </button>
      </div>

      <div className="form-list">
        {data.map((skill) => (
          <div key={skill.id} className="form-item">
            <div className="form-item-header">
              <h3 className="form-item-title">Skill</h3>
              <button
                onClick={() => removeSkill(skill.id)}
                className="remove-button"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="form-grid">
              <div className="input-group">
                <label className="input-label">Skill Name</label>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  className="input"
                  placeholder="React, TypeScript, etc."
                />
              </div>

              <div className="input-group">
                <label className="input-label">Proficiency Level</label>
                <div className="stars-container">
                  {renderStars(skill.level)}
                  <span className="level-text">
                    {['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'][skill.level - 1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;