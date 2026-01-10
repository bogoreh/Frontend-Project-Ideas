import { Brain, Sparkles } from 'lucide-react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon">
            <Brain size={28} color="white" />
          </div>
          <div className="logo-text">
            <h1>AI Writing Assistant</h1>
            <p>Enhance your writing with artificial intelligence</p>
          </div>
        </div>
        
        <div className="usage-stats">
          <div className="stat-item">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">
              <Sparkles size={20} />
            </span>
            <span className="stat-label">AI Powered</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">∞</span>
            <span className="stat-label">Words</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header