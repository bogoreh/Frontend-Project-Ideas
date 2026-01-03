import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h3 className="hero-subtitle">Elegant Interior Design</h3>
            <h1 className="hero-title">Transform Your Space Into A Masterpiece</h1>
            <p className="hero-description">
              We create beautiful, functional spaces that reflect your personality and lifestyle. 
              Our team of expert designers will bring your vision to life.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View Our Work <FaArrowRight /></a>
              <a href="#contact" className="btn btn-outline">Book Consultation</a>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>250+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        .hero {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                      url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');
          background-size: cover;
          background-position: center;
          color: var(--light-color);
          padding: 120px 0;
          min-height: 90vh;
          display: flex;
          align-items: center;
        }
        
        .hero-content {
          max-width: 800px;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--accent-color);
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 30px;
          max-width: 600px;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }
        
        .hero-buttons .btn {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .hero-stats {
          display: flex;
          gap: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 40px;
        }
        
        .stat-item h3 {
          font-size: 2.5rem;
          margin-bottom: 5px;
          color: var(--primary-color);
        }
        
        .stat-item p {
          color: rgba(255, 255, 255, 0.8);
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 80px 0;
            min-height: auto;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;