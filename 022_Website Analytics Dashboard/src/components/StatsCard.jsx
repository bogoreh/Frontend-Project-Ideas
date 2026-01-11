import React from 'react'
import './StatsCard.css'

const StatsCard = ({ title, value, change, icon, color }) => {
  const isPositive = change && change.includes('+')
  
  return (
    <div className="stats-card">
      <div className="card-header">
        <div className="card-icon" style={{ backgroundColor: color + '20', color: color }}>
          {icon}
        </div>
        <div className="card-change" style={{ color: isPositive ? '#2ecc71' : '#e74c3c' }}>
          {change}
        </div>
      </div>
      <div className="card-value">{value}</div>
      <div className="card-title">{title}</div>
      <div className="card-progress">
        <div 
          className="progress-bar" 
          style={{ 
            width: isPositive ? '70%' : '40%', 
            backgroundColor: isPositive ? '#2ecc71' : '#e74c3c' 
          }}
        ></div>
      </div>
    </div>
  )
}

export default StatsCard