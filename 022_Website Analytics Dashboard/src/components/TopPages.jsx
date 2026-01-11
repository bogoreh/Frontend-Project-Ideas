import React from 'react'
import './TopPages.css'

const TopPages = () => {
  const pages = [
    { name: 'Homepage', views: 8423, growth: '+12%' },
    { name: 'Product Catalog', views: 6521, growth: '+8%' },
    { name: 'About Us', views: 4215, growth: '+15%' },
    { name: 'Contact Page', views: 3210, growth: '+5%' },
    { name: 'Blog Post', views: 2850, growth: '+22%' },
  ]
  
  return (
    <div className="top-pages-container">
      <div className="top-pages-header">
        <h3>Top Pages</h3>
        <span className="view-all">View All →</span>
      </div>
      
      <div className="pages-list">
        {pages.map((page, index) => (
          <div key={index} className="page-item">
            <div className="page-rank">{index + 1}</div>
            <div className="page-info">
              <div className="page-name">{page.name}</div>
              <div className="page-views">{page.views.toLocaleString()} views</div>
            </div>
            <div className="page-growth">{page.growth}</div>
          </div>
        ))}
      </div>
      
      <div className="pages-summary">
        <div className="summary-item">
          <span className="summary-value">25,219</span>
          <span className="summary-label">Total Pageviews</span>
        </div>
        <div className="summary-item">
          <span className="summary-value">5.2</span>
          <span className="summary-label">Avg. Pages/Visit</span>
        </div>
      </div>
    </div>
  )
}

export default TopPages