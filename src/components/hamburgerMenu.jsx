// HamburgerMenu.js
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chinese">Chinese</Link></li>
        <li><Link to="/arabian">Arabian</Link></li>
        <li><Link to="/biriyani">Biriyani</Link></li>
        <li><Link to="/juices">Juices</Link></li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
