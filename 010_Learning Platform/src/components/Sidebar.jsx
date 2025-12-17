import React from 'react';
import { categories } from '../data';

const Sidebar = ({ activeCategory, setActiveCategory }) => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarContent}>
        <h3 style={styles.sidebarTitle}>Categories</h3>
        <ul style={styles.categoryList}>
          {categories.map(category => (
            <li 
              key={category} 
              style={{
                ...styles.categoryItem,
                ...(activeCategory === category ? styles.activeCategory : {})
              }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              {activeCategory === category && (
                <span style={styles.activeIndicator}></span>
              )}
            </li>
          ))}
        </ul>
        
        <div style={styles.stats}>
          <h3 style={styles.sidebarTitle}>Your Stats</h3>
          <div style={styles.statItem}>
            <span style={styles.statLabel}>Courses Enrolled</span>
            <span style={styles.statValue}>6</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statLabel}>Completed</span>
            <span style={styles.statValue}>2</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statLabel}>Learning Hours</span>
            <span style={styles.statValue}>24</span>
          </div>
        </div>
        
        <div style={styles.quote}>
          <p style={styles.quoteText}>"The beautiful thing about learning is that no one can take it away from you."</p>
          <p style={styles.quoteAuthor}>- B.B. King</p>
        </div>
      </div>
    </aside>
  );
};

const styles = {
  sidebar: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    height: 'fit-content',
  },
  sidebarContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  sidebarTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#1f2937',
  },
  categoryList: {
    listStyle: 'none',
    marginBottom: '2rem',
  },
  categoryItem: {
    padding: '0.75rem 1rem',
    marginBottom: '0.5rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    position: 'relative',
    color: '#4b5563',
  },
  activeCategory: {
    backgroundColor: '#f5f3ff',
    color: '#4f46e5',
    fontWeight: '600',
  },
  activeIndicator: {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#4f46e5',
  },
  stats: {
    marginBottom: '2rem',
  },
  statItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 0',
    borderBottom: '1px solid #f3f4f6',
  },
  statLabel: {
    color: '#6b7280',
    fontSize: '0.95rem',
  },
  statValue: {
    fontWeight: '700',
    color: '#4f46e5',
    fontSize: '1.1rem',
  },
  quote: {
    backgroundColor: '#f0f9ff',
    padding: '1.25rem',
    borderRadius: '10px',
    borderLeft: '4px solid #0ea5e9',
  },
  quoteText: {
    fontStyle: 'italic',
    color: '#0369a1',
    marginBottom: '0.5rem',
  },
  quoteAuthor: {
    color: '#0c4a6e',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
};

export default Sidebar;