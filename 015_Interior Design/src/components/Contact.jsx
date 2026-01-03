import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Ready to transform your space? Contact us for a free consultation today.</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>info@designstudio.com</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Address</h3>
              <p>123 Design Street, New York, NY 10001</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        .contact {
          background-color: var(--secondary-color);
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 50px;
        }
        
        .contact-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        
        .info-card {
          background-color: var(--light-color);
          padding: 30px;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
          text-align: center;
          transition: var(--transition);
        }
        
        .info-card:hover {
          transform: translateY(-5px);
        }
        
        .info-icon {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 15px;
        }
        
        .info-card h3 {
          margin-bottom: 10px;
          color: var(--dark-color);
        }
        
        .info-card p {
          color: var(--text-light);
          line-height: 1.6;
        }
        
        .contact-form-container {
          background-color: var(--light-color);
          padding: 40px;
          border-radius: var(--border-radius);
          box-shadow: var(--shadow);
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: var(--border-radius);
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(138, 113, 82, 0.2);
        }
        
        .submit-btn {
          width: 100%;
          font-size: 1.1rem;
          padding: 15px;
        }
        
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .contact-form-container {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;