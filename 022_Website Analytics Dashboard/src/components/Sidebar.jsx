import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard')
  
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'analytics', name: 'Analytics', icon: '📈' },
    { id: 'reports', name: 'Reports', icon: '📑' },
    { id: 'visitors', name: 'Visitors', icon: '👥' },
    { id: 'traffic', name: 'Traffic Sources', icon: '🌐' },
    { id: 'conversions', name: 'Conversions', icon: '🎯' },
    { id: 'events', name: 'Events', icon: '📝' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ]
  
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">📊</div>
        <h2>Analytics</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map(item => (
            <li 
              key={item.id} 
              className={activeItem === item.name ? 'active' : ''}
              onClick={() => setActiveItem(item.name)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="help-section">
          <div className="help-icon">❓</div>
          <div>
            <h4>Need help?</h4>
            <p>Check our documentation</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar