import { useState } from 'react';
import { FaSearch, FaBed, FaBath, FaExpandArrowsAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      category: 'residential',
      title: 'Modern Apartment',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: { beds: 3, baths: 2, size: '1200 sq ft' }
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Corporate Office',
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: { beds: 0, baths: 4, size: '5000 sq ft' }
    },
    {
      id: 3,
      category: 'residential',
      title: 'Luxury Villa',
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: { beds: 5, baths: 4, size: '3500 sq ft' }
    },
    {
      id: 4,
      category: 'commercial',
      title: 'Boutique Hotel',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: { beds: 20, baths: 20, size: '15000 sq ft' }
    },
    {
      id: 5,
      category: 'residential',
      title: 'Minimalist Loft',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: { beds: 2, baths: 1, size: '900 sq ft' }
    },
    {
      id: 6,
      category: 'commercial',
      title: 'Restaurant Design',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: { beds: 0, baths: 3, size: '3000 sq ft' }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Our Projects</h2>
          <p>Explore our portfolio of beautifully designed spaces that showcase our expertise and creativity.</p>
        </div>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
            onClick={() => setActiveFilter('residential')}
          >
            Residential
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveFilter('commercial')}
          >
            Commercial
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-btn">
                    <FaSearch />
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-location">{project.location}</p>
                <div className="project-features">
                  <span><FaBed /> {project.features.beds}</span>
                  <span><FaBath /> {project.features.baths}</span>
                  <span><FaExpandArrowsAlt /> {project.features.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="btn">View All Projects</a>
        </div>
      </div>
      
      <style jsx="true">{`
        .projects {
          background-color: var(--light-color);
        }
        
        .project-filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 40px;
        }
        
        .filter-btn {
          background: none;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          padding: 10px 25px;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          transition: var(--transition);
        }
        
        .filter-btn.active, .filter-btn:hover {
          background-color: var(--primary-color);
          color: white;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .project-card {
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        
        .project-card:hover {
          transform: translateY(-10px);
        }
        
        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(138, 113, 82, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: var(--transition);
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .view-btn {
          background-color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2rem;
          color: var(--primary-color);
          cursor: pointer;
          transition: var(--transition);
        }
        
        .view-btn:hover {
          transform: scale(1.1);
        }
        
        .project-info {
          padding: 25px;
          background-color: white;
        }
        
        .project-info h3 {
          margin-bottom: 10px;
          color: var(--dark-color);
        }
        
        .project-location {
          color: var(--text-light);
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .project-features {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #eee;
          padding-top: 15px;
        }
        
        .project-features span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--text-light);
        }
        
        .text-center {
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-filters {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;