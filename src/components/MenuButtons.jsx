import { useState } from 'react';
import './MenuButtons.css';
import { Link, useLocation } from 'react-router-dom';

const MenuButtons = () => {
  const location = useLocation(); // Get current route
  const [selected, setSelected] = useState('');

  const menuItems = [
    { id: 'chinese', label: 'chinese', iconClass: 'icon-chinese' },
    { id: 'arabian', label: 'arabian', iconClass: 'icon-arabian' },
    { id: 'biriyani', label: 'biriyani', iconClass: 'icon-biriyani' },
    { id: 'juices', label: 'juices', iconClass: 'icon-juices' }
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <Link
          to={`/${item.id}`}
          key={item.id}
          className={`menu-button ${location.pathname === `/${item.id}` ? 'selected' : ''}`}
          onClick={() => setSelected(item.id)}
          style={{ textDecoration: 'none' }}
        >
          <div className={`menu-icon ${item.iconClass}`}></div>
          <span className="menu-label">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default MenuButtons;
