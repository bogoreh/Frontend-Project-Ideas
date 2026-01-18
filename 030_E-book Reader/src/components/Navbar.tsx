import { FaBook, FaUser } from 'react-icons/fa';  // Remove React import

const Navbar = () => {  // Remove React.FC
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <FaBook className="logo-icon" />
          <span className="logo-text">E-Reader</span>
        </div>
        <button className="user-btn">
          <FaUser />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;