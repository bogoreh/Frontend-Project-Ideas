import React from 'react'
import './VisitorMap.css'

const VisitorMap = () => {
  const regions = [
    { name: 'North America', visitors: 5840, percentage: 45 },
    { name: 'Europe', visitors: 4215, percentage: 33 },
    { name: 'Asia', visitors: 2150, percentage: 17 },
    { name: 'Others', visitors: 842, percentage: 5 },
  ]
  
  return (
    <div className="visitor-map-container">
      <div className="visitor-map-header">
        <h3>Visitors by Region</h3>
        <select defaultValue="last-week">
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
          <option value="last-year">Last Year</option>
        </select>
      </div>
      
      <div className="map-visualization">
        {/* Simplified world map representation */}
        <div className="world-map">
          <div className="region na" style={{ height: '45%' }}></div>
          <div className="region eu" style={{ height: '33%' }}></div>
          <div className="region as" style={{ height: '17%' }}></div>
          <div className="region other" style={{ height: '5%' }}></div>
        </div>
        
        <div className="region-list">
          {regions.map((region, index) => (
            <div key={index} className="region-item">
              <div className="region-info">
                <div className="region-name">{region.name}</div>
                <div className="region-visitors">{region.visitors.toLocaleString()} visitors</div>
              </div>
              <div className="region-percentage">{region.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VisitorMap