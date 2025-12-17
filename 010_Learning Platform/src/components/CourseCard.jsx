import React from 'react';
import ProgressBar from './ProgressBar';

const CourseCard = ({ course }) => {
  const getLevelClass = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'tag-beginner';
      case 'intermediate':
        return 'tag-intermediate';
      case 'advanced':
        return 'tag-advanced';
      default:
        return '';
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div style={styles.imageContainer}>
          <img src={course.image} alt={course.title} style={styles.courseImage} />
          <div style={styles.categoryTag}>
            {course.category}
          </div>
        </div>
      </div>
      <div style={styles.cardBody}>
        <div style={styles.cardTitleRow}>
          <h3 style={styles.courseTitle}>{course.title}</h3>
          <span className={`tag ${getLevelClass(course.level)}`}>
            {course.level}
          </span>
        </div>
        <p style={styles.courseDescription}>{course.description}</p>
        <div style={styles.courseMeta}>
          <div style={styles.metaItem}>
            <span style={styles.metaIcon}>👤</span>
            <span>{course.instructor}</span>
          </div>
          <div style={styles.metaItem}>
            <span style={styles.metaIcon}>⏱️</span>
            <span>{course.duration}</span>
          </div>
        </div>
        
        {course.progress > 0 ? (
          <div style={styles.progressContainer}>
            <div style={styles.progressHeader}>
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <ProgressBar progress={course.progress} />
          </div>
        ) : (
          <div style={styles.enrollButton}>
            <button className="btn btn-primary" style={styles.button}>
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    position: 'relative',
  },
  imageContainer: {
    height: '160px',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  courseImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  categoryTag: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: 'rgba(79, 70, 229, 0.9)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  cardBody: {
    padding: '1.5rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.75rem',
  },
  courseTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginRight: '0.5rem',
    flex: 1,
  },
  courseDescription: {
    color: '#6b7280',
    fontSize: '0.95rem',
    marginBottom: '1rem',
    flex: 1,
  },
  courseMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    color: '#4b5563',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
  },
  metaIcon: {
    marginRight: '0.5rem',
  },
  progressContainer: {
    marginTop: 'auto',
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#4b5563',
  },
  enrollButton: {
    marginTop: 'auto',
  },
  button: {
    width: '100%',
  },
};

export default CourseCard;