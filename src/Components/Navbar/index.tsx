import React from 'react';
import './navbar.css';

const Navbar: React.FC = ({children}) => {
  return (
      <nav className="navbar">
          {children}
      </nav>
  );
}

export default Navbar;