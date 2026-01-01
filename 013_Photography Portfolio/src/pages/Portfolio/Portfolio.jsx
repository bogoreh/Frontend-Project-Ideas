import './Portfolio.css'
import { useState } from 'react'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'landscape', label: 'Landscape' },
    { id: 'street', label: 'Street' },
    { id: 'events', label: 'Events' },
  ]

  const projects = [
    { id: 1, title: 'Golden Hour Portraits', category: 'portrait', year: '2023' },
    { id: 2, title: 'Mountain Majesty', category: 'landscape', year: '2023' },
    { id: 3, title: 'Urban Rhythm', category: 'street', year: '2023' },
    { id: 4, title: 'Wedding Bliss', category: 'events', year: '2022' },
    { id: 5, title: 'Studio Elegance', category: 'portrait', year: '2022' },
    { id: 6, title: 'Coastal Dreams', category: 'landscape', year: '2022' },
    { id: 7, title: 'City Nights', category: 'street', year: '2022' },
    { id: 8, title: 'Corporate Conference', category: 'events', year: '2021' },
    { id: 9, title: 'Family Moments', category: 'portrait', year: '2021' },
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="portfolio">
      <div className="container">
        {/* Portfolio Header */}
        <div className="portfolio-header">
          <h1>My Portfolio</h1>
          <p>A curated collection of my finest photographic work across various genres and projects</p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span className="year-badge">{project.year}</span>
                </div>
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="portfolio-stats">
          <div className="stat-card">
            <h3>Curated Selection</h3>
            <p>Each project represents hours of dedicated work, from concept to final edit</p>
          </div>
          <div className="stat-card">
            <h3>Diverse Range</h3>
            <p>From intimate portraits to vast landscapes, exploring different photographic styles</p>
          </div>
          <div className="stat-card">
            <h3>Client Focused</h3>
            <p>Every project tailored to client vision while maintaining artistic integrity</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio