import { FaHome, FaPaintRoller, FaCouch, FaLightbulb, FaRulerCombined, FaPeopleCarry } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: "Residential Design",
      description: "Beautiful and functional interiors for homes and apartments that reflect your personal style."
    },
    {
      icon: <FaPaintRoller />,
      title: "Commercial Design",
      description: "Professional spaces that enhance productivity and reflect your brand identity."
    },
    {
      icon: <FaCouch />,
      title: "Furniture Selection",
      description: "Curated furniture pieces that complement your space and provide comfort and style."
    },
    {
      icon: <FaLightbulb />,
      title: "Lighting Design",
      description: "Strategic lighting plans that create ambiance and highlight architectural features."
    },
    {
      icon: <FaRulerCombined />,
      title: "Space Planning",
      description: "Optimizing your space layout for maximum functionality and aesthetic appeal."
    },
    {
      icon: <FaPeopleCarry />,
      title: "Project Management",
      description: "End-to-end management of your design project from concept to completion."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer comprehensive interior design services tailored to your unique needs and vision.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">Learn More</a>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx="true">{`
        .services {
          background-color: var(--secondary-color);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .service-card {
          background-color: var(--light-color);
          padding: 40px 30px;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          transition: var(--transition);
          text-align: center;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        
        .service-icon {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 20px;
        }
        
        .service-card h3 {
          margin-bottom: 15px;
          color: var(--dark-color);
        }
        
        .service-card p {
          color: var(--text-light);
          margin-bottom: 20px;
        }
        
        .service-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          transition: var(--transition);
        }
        
        .service-link:hover {
          color: var(--dark-color);
          gap: 5px;
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;