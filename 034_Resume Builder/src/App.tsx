import React, { useState } from 'react';
import { ResumeData } from './types/resume';
import Header from './components/Layout/Header';
import BasicInfo from './components/ResumeForm/BasicInfo';
import Education from './components/ResumeForm/Education';
import Experience from './components/ResumeForm/Experience';
import Skills from './components/ResumeForm/Skills';
import ResumePreview from './components/ResumePreview/ResumePreview';
import './App.css';

const initialResumeData: ResumeData = {
  basicInfo: {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '(123) 456-7890',
    address: 'New York, NY',
    summary: 'Passionate developer with 3+ years of experience building web applications.'
  },
  education: [
    {
      id: '1',
      school: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2018',
      endDate: '2022',
      description: 'Graduated with honors. Focus on web development and data structures.'
    }
  ],
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Frontend Developer',
      startDate: '2022',
      endDate: 'Present',
      description: 'Developed responsive web applications using React and TypeScript.'
    }
  ],
  skills: [
    { id: '1', name: 'React', level: 5 },
    { id: '2', name: 'TypeScript', level: 4 },
    { id: '3', name: 'JavaScript', level: 5 },
    { id: '4', name: 'CSS', level: 4 }
  ]
};

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTab, setActiveTab] = useState('basic');

  const updateBasicInfo = (data: Partial<ResumeData['basicInfo']>) => {
    setResumeData(prev => ({
      ...prev,
      basicInfo: { ...prev.basicInfo, ...data }
    }));
  };

  const updateEducation = (education: Education[]) => {
    setResumeData(prev => ({ ...prev, education }));
  };

  const updateExperience = (experience: Experience[]) => {
    setResumeData(prev => ({ ...prev, experience }));
  };

  const updateSkills = (skills: Skill[]) => {
    setResumeData(prev => ({ ...prev, skills }));
  };

  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="app">
      <Header onDownload={downloadPDF} />
      
      <main className="main-container">
        <div className="form-section">
          <div className="form-tabs">
            {['basic', 'education', 'experience', 'skills', 'preview'].map(tab => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="form-content">
            {activeTab === 'basic' && (
              <BasicInfo data={resumeData.basicInfo} onChange={updateBasicInfo} />
            )}
            {activeTab === 'education' && (
              <Education data={resumeData.education} onChange={updateEducation} />
            )}
            {activeTab === 'experience' && (
              <Experience data={resumeData.experience} onChange={updateExperience} />
            )}
            {activeTab === 'skills' && (
              <Skills data={resumeData.skills} onChange={updateSkills} />
            )}
            {activeTab === 'preview' && (
              <div className="preview-mobile">
                <ResumePreview data={resumeData} />
              </div>
            )}
          </div>
        </div>

        <div className="preview-section">
          <ResumePreview data={resumeData} />
        </div>
      </main>

      <footer className="footer">
        <p>Resume Builder • Made with React & TypeScript</p>
      </footer>
    </div>
  );
}

export default App;