import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import StatsCard from './components/StatsCard'
import TrafficChart from './components/TrafficChart'
import TopPages from './components/TopPages'
import VisitorMap from './components/VisitorMap'
import './App.css'

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <h1 className="page-title">Analytics Dashboard</h1>
        <p className="page-subtitle">Overview of your website performance and user engagement</p>
        
        <div className="dashboard-grid">
          <StatsCard 
            title="Total Visitors" 
            value="12,847" 
            change="+12.5%" 
            icon="👥"
            color="#3498db"
          />
          <StatsCard 
            title="Page Views" 
            value="42,315" 
            change="+8.2%" 
            icon="📊"
            color="#2ecc71"
          />
          <StatsCard 
            title="Avg. Time on Site" 
            value="3m 42s" 
            change="+2.1%" 
            icon="⏱️"
            color="#e74c3c"
          />
          <StatsCard 
            title="Bounce Rate" 
            value="32.4%" 
            change="-5.3%" 
            icon="📉"
            color="#f39c12"
          />
        </div>
        
        <div className="charts-container">
          <TrafficChart />
          <TopPages />
        </div>
        
        <div className="other-stats-container">
          <VisitorMap />
          <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '15px', color: '#2c3e50' }}>Device Breakdown</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>Mobile</span>
                  <span style={{ fontWeight: 'bold' }}>62%</span>
                </div>
                <div style={{ height: '8px', backgroundColor: '#ecf0f1', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '62%', height: '100%', backgroundColor: '#3498db', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>Desktop</span>
                  <span style={{ fontWeight: 'bold' }}>34%</span>
                </div>
                <div style={{ height: '8px', backgroundColor: '#ecf0f1', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '34%', height: '100%', backgroundColor: '#2ecc71', borderRadius: '4px' }}></div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>Tablet</span>
                  <span style={{ fontWeight: 'bold' }}>4%</span>
                </div>
                <div style={{ height: '8px', backgroundColor: '#ecf0f1', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '4%', height: '100%', backgroundColor: '#f39c12', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App