export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">SaaSPro</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-buttons">
          <button className="btn btn-login">Log In</button>
          <button className="btn btn-primary">Start Free Trial</button>
        </div>
      </div>
    </header>
  )
}