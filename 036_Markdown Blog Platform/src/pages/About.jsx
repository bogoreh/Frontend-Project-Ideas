const About = () => {
  return (
    <div className="container">
      <div className="blog-post">
        <h1 className="post-title">About Markdown Blog</h1>
        
        <div className="post-content">
          <p>
            Welcome to <strong>Markdown Blog</strong>, a modern blogging platform built for developers,
            writers, and content creators who appreciate simplicity and power.
          </p>

          <h2>🌟 Our Mission</h2>
          <p>
            We believe that writing should be frictionless. That's why we built a platform that lets you
            focus on your content, not on complicated formatting tools. With Markdown support, you can
            write beautiful, structured content using simple text syntax.
          </p>

          <h2>🚀 Features</h2>
          <ul>
            <li><strong>Markdown First</strong>: Write posts using Markdown syntax</li>
            <li><strong>PWA Ready</strong>: Install as an app on your device</li>
            <li><strong>Offline Support</strong>: Read posts even without internet</li>
            <li><strong>Responsive Design</strong>: Beautiful on any device</li>
            <li><strong>Fast & Lightweight</strong>: Built with Vite and React</li>
          </ul>

          <h2>🛠️ Technology Stack</h2>
          <p>This platform is built with modern web technologies:</p>
          <ul>
            <li><strong>React</strong>: Frontend library for building user interfaces</li>
            <li><strong>Vite</strong>: Next-generation frontend tooling</li>
            <li><strong>React Markdown</strong>: Markdown rendering</li>
            <li><strong>PWA</strong>: Progressive Web App capabilities</li>
            <li><strong>Service Workers</strong>: Offline functionality</li>
          </ul>

          <blockquote>
            "Good tools make for good work. We've built Markdown Blog to be the best tool for writers
            who want to share their knowledge with the world."
          </blockquote>

          <h2>📝 Get Started</h2>
          <p>
            Ready to start writing? This platform is open source and easy to set up. Clone the repository,
            add your Markdown content, and deploy. It's that simple!
          </p>

          <div style={{
            backgroundColor: 'var(--gray-light)',
            padding: '2rem',
            borderRadius: 'var(--radius)',
            marginTop: '2rem'
          }}>
            <h3>Quick Start Guide</h3>
            <pre style={{ backgroundColor: 'var(--dark)', color: 'white', padding: '1rem' }}>
{`# Clone the repository
git clone https://github.com/yourusername/markdown-blog.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build`}
            </pre>
          </div>

          <h2>🤝 Contributing</h2>
          <p>
            We welcome contributions! Whether you're fixing bugs, adding features, or improving documentation,
            your help is appreciated. Check out our GitHub repository to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;