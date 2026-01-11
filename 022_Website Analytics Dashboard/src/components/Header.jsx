import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [dateRange, setDateRange] = useState('Last 7 days')
  
  return (
    <header className="header">
      <div className="header-left">
        <div className="date-selector">
          <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>
      <div className="header-right">
        <button className="btn-download">
          <span>📥</span> Export Report
        </button>
        <div className="user-profile">
          <div className="avatar">JD</div>
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header