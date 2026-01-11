import React from 'react'
import './TrafficChart.css'

const TrafficChart = () => {
  // Sample data for the chart
  const data = [
    { day: 'Mon', visitors: 3200 },
    { day: 'Tue', visitors: 4200 },
    { day: 'Wed', visitors: 3800 },
    { day: 'Thu', visitors: 5100 },
    { day: 'Fri', visitors: 4900 },
    { day: 'Sat', visitors: 4100 },
    { day: 'Sun', visitors: 3500 },
  ]
  
  const maxVisitors = Math.max(...data.map(d => d.visitors))
  
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Visitor Traffic</h3>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#3498db' }}></div>
            <span>This Week</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#bdc3c7' }}></div>
            <span>Last Week</span>
          </div>
        </div>
      </div>
      
      <div className="chart-content">
        <div className="chart-y-axis">
          <span>{maxVisitors.toLocaleString()}</span>
          <span>{(maxVisitors/2).toLocaleString()}</span>
          <span>0</span>
        </div>
        
        <div className="chart-bars">
          {data.map((item, index) => {
            const height = (item.visitors / maxVisitors) * 100
            return (
              <div key={index} className="bar-container">
                <div 
                  className="bar" 
                  style={{ height: `${height}%`, backgroundColor: '#3498db' }}
                ></div>
                <div 
                  className="bar bar-last-week" 
                  style={{ height: `${height * 0.8}%` }}
                ></div>
                <div className="bar-label">{item.day}</div>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="chart-summary">
        <div className="summary-item">
          <span className="summary-value">12,847</span>
          <span className="summary-label">Total Visitors</span>
        </div>
        <div className="summary-item">
          <span className="summary-value">+12.5%</span>
          <span className="summary-label">vs Last Week</span>
        </div>
        <div className="summary-item">
          <span className="summary-value">3m 42s</span>
          <span className="summary-label">Avg. Duration</span>
        </div>
      </div>
    </div>
  )
}

export default TrafficChart