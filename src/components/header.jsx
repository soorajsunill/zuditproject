import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Ensure this CSS file is updated for the new styles
import MenuButtons from './MenuButtons';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-header">
    <header className="header">
      <div className="hamburger-container" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? '×' : '☰'}}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      </div>
      
      
      <Link to="/"><img src="images/mainlogo-min.png" id='logo'/></Link>

      {/* Full-screen overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'visible' : ''}`} onClick={toggleMenu}></div>

      {/* Sidebar menu */}
      <nav className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/chinese" onClick={toggleMenu}>Chinese</Link></li>
          <li><Link to="/arabian" onClick={toggleMenu}>Arabian</Link></li>
          <li><Link to="/biriyani" onClick={toggleMenu}>Biriyani</Link></li>
          <li><Link to="/juices" onClick={toggleMenu}>Juices</Link></li>
        </ul>
      </nav>
    </header>
    <MenuButtons />

    </div>
  );
};

export default Header;
