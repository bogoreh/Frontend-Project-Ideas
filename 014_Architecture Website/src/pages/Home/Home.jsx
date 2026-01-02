import { useState } from 'react';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import './Home.css';
import { FaRocket, FaLightbulb, FaShieldAlt, FaUsers, FaChartLine, FaCode } from 'react-icons/fa';

const Home = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <FaRocket />,
      title: 'Blazing Fast',
      description: 'Experience instant hot module replacement and lightning-fast builds with Vite.',
      color: '#4361ee'
    },
    {
      icon: <FaLightbulb />,
      title: 'Modern Architecture',
      description: 'Clean, scalable folder structure following best practices.',
      color: '#4cc9f0'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Production Ready',
      description: 'Optimized builds, code splitting, and security best practices.',
      color: '#f72585'
    },
    {
      icon: <FaUsers />,
      title: 'Developer Friendly',
      description: 'Comprehensive documentation and easy-to-understand codebase.',
      color: '#7209b7'
    },
    {
      icon: <FaChartLine />,
      title: 'Optimized Performance',
      description: 'Built-in performance optimizations and lazy loading.',
      color: '#4ade80'
    },
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable, and reusable components.',
      color: '#f59e0b'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Frontend Developer',
      content: 'This template saved me weeks of setup time. The architecture is perfect for scaling.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      content: 'Our team productivity increased by 40% after adopting this starter template.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'Marcus Rivera',
      role: 'CTO',
      content: 'The best React starter kit I\'ve used. Professional and production-ready.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Build <span className="gradient-text">Modern Web Apps</span> with Vite + React
              </h1>
              <p className="hero-subtitle">
                A production-ready starter template with beautiful design, clean architecture, 
                and all the tools you need to build amazing applications.
              </p>
              <div className="hero-actions">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  <FaRocket /> Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="large"
                  onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-cards">
                <div className="floating-card card-1">
                  <FaCode size={24} />
                  <span>Clean Code</span>
                </div>
                <div className="floating-card card-2">
                  <FaRocket size={24} />
                  <span>Fast Build</span>
                </div>
                <div className="floating-card card-3">
                  <FaShieldAlt size={24} />
                  <span>Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everything You Need</h2>
            <p className="section-subtitle">
              Packed with features to accelerate your development process
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="feature-card"
                hoverable
              >
                <div 
                  className="feature-icon"
                  style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Loved by Developers</h2>
            <p className="section-subtitle">
              Join thousands of developers building with our template
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card" hoverable>
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <Card className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Start Building Today</h2>
              <p className="cta-description">
                Join thousands of developers who have accelerated their projects with our starter template.
              </p>
              <form onSubmit={handleSubscribe} className="cta-form">
                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="form-input"
                    required
                  />
                  <Button type="submit" variant="primary">
                    Get Started Free
                  </Button>
                </div>
                <p className="form-note">
                  No credit card required • 30-day free trial
                </p>
              </form>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;