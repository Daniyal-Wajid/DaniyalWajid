import React from 'react';
import sunIcon from '../assets/nav/sun.png';  
import moonIcon from '../assets/nav/moon.png';
import menuIcon from '../assets/nav/menu.png'; 
import './styles.css';

const Nav = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="Nav">
      <span className='logo'>DW</span>
      <div className="nav-controls">
        <button onClick={toggleTheme} aria-label="Toggle Theme" className="theme-toggle-btn">
          <img 
            src={isDarkMode ? sunIcon : moonIcon} 
            alt={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} 
            style={{ width: '24px', height: '24px' }} 
          />
        </button>
        <button className="menu-btn" aria-label="Menu">
          <img 
            src={menuIcon} 
            alt="Menu" 
            style={{ width: '24px', height: '24px' }} 
          />
        </button>
      </div>
    </div>
  );
}

export default Nav;
