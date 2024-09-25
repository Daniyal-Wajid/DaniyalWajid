// Nav.js
import React, { useState } from 'react';
import sunIcon from '../assets/nav/sun.png';  
import moonIcon from '../assets/nav/moon.png';
import menuIcon from '../assets/nav/menu.png'; 
import Sidebar from './Sidebar'; // Import the Sidebar component
import './styles.css';

const Nav = ({ isDarkMode, toggleTheme }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

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
        <button onClick={toggleSidebar} className="menu-btn" aria-label="Menu">
          <img 
            src={menuIcon} 
            alt="Menu" 
            style={{ width: '24px', height: '24px' }} 
          />
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
}

export default Nav;
