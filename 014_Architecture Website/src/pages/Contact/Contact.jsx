import { useState } from 'react';
import './Contact.css';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['support@vitereact.dev', 'info@vitereact.dev'],
      action: 'mailto:support@vitereact.dev'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      action: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Office',
      details: ['123 Tech Street', 'San Francisco, CA 94107'],
      action: 'https://maps.google.com'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const faqs = [
    {
      question: 'Is the template free to use?',
      answer: 'Yes, our starter template is completely free and open source.'
    },
    {
      question: 'How do I get support?',
      answer: 'You can open issues on GitHub or contact us through this form.'
    },
    {
      question: 'Can I use this for commercial projects?',
      answer: 'Absolutely! Our template is MIT licensed and can be used for any project.'
    },
    {
      question: 'How often is the template updated?',
      answer: 'We release updates monthly with new features and security patches.'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <Card className="contact-form-card">
                <h2 className="form-title">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="success-message">
                    <FaCheckCircle className="success-icon" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        placeholder="Tell us more about your project..."
                        rows="6"
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      fullWidth
                      disabled={isSubmitting}
                      className={isSubmitting ? 'btn-loading' : ''}
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          <FaPaperPlane /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2 className="info-title">Contact Information</h2>
              <p className="info-subtitle">
                Reach out to us through any of these channels
              </p>
              
              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="contact-info-card" hoverable>
                    <div className="contact-info-icon">
                      {info.icon}
                    </div>
                    <h3 className="contact-info-title">{info.title}</h3>
                    <div className="contact-info-details">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                    <a 
                      href={info.action} 
                      className="contact-info-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact via {info.title.toLowerCase()}
                    </a>
                  </Card>
                ))}
              </div>

              {/* FAQs */}
              <div className="faqs-section">
                <h3 className="faqs-title">Frequently Asked Questions</h3>
                <div className="faqs-list">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="faq-card">
                      <details className="faq-details">
                        <summary className="faq-question">
                          {faq.question}
                        </summary>
                        <p className="faq-answer">{faq.answer}</p>
                      </details>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <Card className="map-card">
            <div className="map-placeholder">
              <div className="map-content">
                <FaMapMarkerAlt className="map-icon" />
                <h3>Our Location</h3>
                <p>San Francisco, California</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;