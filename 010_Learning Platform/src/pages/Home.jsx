import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import Sidebar from '../components/Sidebar';
import LessonList from '../components/LessonList';
import { courses } from '../data';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);
  
  return (
    <div className="container">
      <div style={styles.hero}>
        <h2 style={styles.heroTitle}>Continue Your Learning Journey</h2>
        <p style={styles.heroSubtitle}>Pick up where you left off or explore new courses to expand your skills.</p>
      </div>
      
      <div style={styles.layout}>
        <div style={styles.mainContent}>
          <div style={styles.sectionHeader}>
            <h3 style={styles.sectionTitle}>My Courses</h3>
            <div style={styles.courseCount}>
              {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
            </div>
          </div>
          
          <div style={styles.coursesGrid}>
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div style={styles.lessonsSection}>
            <LessonList />
          </div>
        </div>
        
        <div style={styles.sidebarContainer}>
          <Sidebar 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    borderRadius: '12px',
    padding: '2.5rem',
    margin: '2rem 0',
    color: 'white',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '0.75rem',
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto',
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gap: '2rem',
    marginBottom: '3rem',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
  },
  courseCount: {
    color: '#6b7280',
    fontSize: '0.95rem',
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2.5rem',
  },
  lessonsSection: {
    marginTop: '1rem',
  },
  sidebarContainer: {
    position: 'sticky',
    top: '100px',
    height: 'fit-content',
  },
};

export default Home;