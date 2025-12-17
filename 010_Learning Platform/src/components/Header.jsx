import React from 'react';

const Header = () => {
  return (
    <header className="header" style={styles.header}>
      <div className="container flex items-center justify-between">
        <div className="logo" style={styles.logo}>
          <h1 style={styles.logoText}>LearnHub</h1>
          <p style={styles.tagline}>Your Path to Knowledge</p>
        </div>
        <div className="user-info flex items-center">
          <div className="avatar" style={styles.avatar}>
            <span style={styles.avatarText}>JD</span>
          </div>
          <div className="user-details" style={styles.userDetails}>
            <p style={styles.userName}>John Doe</p>
            <p style={styles.userRole}>Student</p>
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'white',
    padding: '1.5rem 0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoText: {
    fontSize: '1.875rem',
    fontWeight: '700',
    background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  tagline: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.25rem',
  },
  avatar: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: '#4f46e5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.75rem',
  },
  avatarText: {
    color: 'white',
    fontWeight: '600',
    fontSize: '1rem',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  userName: {
    fontWeight: '600',
    fontSize: '1rem',
  },
  userRole: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginTop: '0.125rem',
  },
};

export default Header;