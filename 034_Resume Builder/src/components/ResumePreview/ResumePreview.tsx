import React from 'react';
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Star } from 'lucide-react';
import { ResumeData } from '../../types/resume';

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const { basicInfo, education, experience, skills } = data;

  return (
    <div className="resume-preview">
      <div className="resume-header">
        <h1 className="resume-name">{basicInfo.fullName}</h1>
        <div className="contact-info">
          <div className="contact-item">
            <Mail size={16} />
            <span>{basicInfo.email}</span>
          </div>
          <div className="contact-item">
            <Phone size={16} />
            <span>{basicInfo.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <span>{basicInfo.address}</span>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title">
          <span className="section-icon">👤</span>
          Summary
        </h2>
        <p className="summary-text">{basicInfo.summary}</p>
      </div>

      {experience.length > 0 && (
        <div className="resume-section">
          <h2 className="section-title">
            <Briefcase size={20} />
            Work Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-position">{exp.position}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>
              <div className="experience-dates">
                {exp.startDate} - {exp.endDate}
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="resume-section">
          <h2 className="section-title">
            <GraduationCap size={20} />
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree} in {edu.field}</h3>
                <span className="education-school">{edu.school}</span>
              </div>
              <div className="education-dates">
                {edu.startDate} - {edu.endDate}
              </div>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div className="resume-section">
          <h2 className="section-title">
            <Star size={20} />
            Skills
          </h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-level">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`skill-dot ${i < skill.level ? 'filled' : ''}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;