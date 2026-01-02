import './About.css';
import Button from '../../components/common/Button/Button';
import Card from '../../components/common/Card/Card';
import { FaUsers, FaRocket, FaHandshake, FaAward } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Projects Built', value: '5K+' },
    { label: 'GitHub Stars', value: '2.5K' },
    { label: 'Team Members', value: '15+' },
  ];

  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and best practices.'
    },
    {
      icon: <FaUsers />,
      title: 'Community',
      description: 'Building tools that empower developers worldwide.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust',
      description: 'Reliable, well-tested code that you can depend on.'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Commitment to quality in every line of code.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      bio: 'Passionate about creating tools that make developers\' lives easier.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      bio: 'Creating beautiful and intuitive user experiences.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'Marcus Rivera',
      role: 'DevOps Engineer',
      bio: 'Ensuring our tools are fast, secure, and reliable.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus'
    },
    {
      name: 'Emma Wilson',
      role: 'Product Manager',
      bio: 'Translating user needs into amazing features.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">Building the Future of Web Development</h1>
            <p className="about-subtitle">
              We're on a mission to create tools that empower developers to build amazing 
              web applications faster and more efficiently.
            </p>
            <Button 
              variant="primary" 
              size="large"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              Star on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                Founded in 2024, ViteReact started as a passion project by a group of 
                developers frustrated with complex setup processes and boilerplate code.
              </p>
              <p>
                We realized that developers were spending too much time setting up projects 
                instead of building features. That's when we decided to create the ultimate 
                React starter template - one that includes everything you need out of the box.
              </p>
              <p>
                Today, thousands of developers trust our template to kickstart their projects, 
                from small startups to large enterprise applications.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <div className="floating-element el-1"></div>
                <div className="floating-element el-2"></div>
                <div className="floating-element el-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <h2 className="section-title text-center">Our Values</h2>
          <p className="section-subtitle text-center">
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <Card key={index} className="value-card" hoverable>
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <h2 className="section-title text-center">Meet Our Team</h2>
          <p className="section-subtitle text-center">
            The passionate people behind ViteReact
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <Card key={index} className="team-card" hoverable>
                <div className="team-member">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="team-avatar"
                  />
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section">
        <div className="container">
          <Card className="cta-card">
            <div className="cta-content">
              <h2>Ready to Build with Us?</h2>
              <p>
                Join our community of developers and start building amazing 
                applications today.
              </p>
              <div className="cta-actions">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="large"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;