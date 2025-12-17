import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={styles.container}>
      <div style={styles.progressBar}>
        <div 
          style={{
            ...styles.progressFill,
            width: `${progress}%`
          }}
        ></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
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
    transition: 'width 0.3s ease',
  },
};

export default ProgressBar;