import React from 'react';
import { lessons } from '../data';

const LessonList = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Current Course Progress</h3>
      <p style={styles.subtitle}>Introduction to React</p>
      
      <div style={styles.lessonsContainer}>
        {lessons.map((lesson, index) => (
          <div key={lesson.id} style={styles.lessonItem}>
            <div style={styles.lessonNumber}>
              {index + 1}
            </div>
            <div style={styles.lessonContent}>
              <div style={styles.lessonHeader}>
                <h4 style={styles.lessonTitle}>{lesson.title}</h4>
                <span style={styles.lessonDuration}>{lesson.duration}</span>
              </div>
              <div style={styles.lessonStatus}>
                {lesson.completed ? (
                  <span style={styles.completedStatus}>✓ Completed</span>
                ) : (
                  <span style={styles.pendingStatus}>○ Pending</span>
                )}
              </div>
            </div>
            <div style={styles.lessonAction}>
              {lesson.completed ? (
                <button style={styles.reviewButton}>Review</button>
              ) : (
                <button style={styles.startButton}>Start</button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div style={styles.overallProgress}>
        <div style={styles.progressInfo}>
          <span>Overall Progress</span>
          <span>40%</span>
        </div>
        <div style={styles.progressBar}>
          <div style={{...styles.progressFill, width: '40%'}}></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1f2937',
  },
  subtitle: {
    color: '#6b7280',
    marginBottom: '1.5rem',
    fontSize: '0.95rem',
  },
  lessonsContainer: {
    marginBottom: '1.5rem',
  },
  lessonItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #f3f4f6',
    transition: 'background-color 0.2s ease',
  },
  lessonNumber: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#f5f3ff',
    color: '#4f46e5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    marginRight: '1rem',
    flexShrink: 0,
  },
  lessonContent: {
    flex: 1,
  },
  lessonHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.25rem',
  },
  lessonTitle: {
    fontWeight: '600',
    fontSize: '1rem',
    color: '#374151',
  },
  lessonDuration: {
    fontSize: '0.85rem',
    color: '#9ca3af',
  },
  lessonStatus: {
    fontSize: '0.85rem',
  },
  completedStatus: {
    color: '#059669',
    fontWeight: '600',
  },
  pendingStatus: {
    color: '#6b7280',
  },
  lessonAction: {
    marginLeft: '1rem',
    flexShrink: 0,
  },
  reviewButton: {
    padding: '6px 12px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    border: 'none',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  startButton: {
    padding: '6px 12px',
    backgroundColor: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  overallProgress: {
    paddingTop: '1rem',
    borderTop: '1px solid #e5e7eb',
  },
  progressInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#4b5563',
  },
  progressBar: {
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4f46e5',
    borderRadius: '4px',
  },
};

export default LessonList;