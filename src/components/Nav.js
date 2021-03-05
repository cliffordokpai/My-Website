import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '2px',
  };

  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyle} to='/'>
          <li>
            <i class='large laptop icon'></i>
          </li>
        </Link>
        <Link style={navStyle} to='/'>
          <li>
            <i class='large home icon'></i>
          </li>
        </Link>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/contact'>
          <li>Contact</li>
        </Link>
        <Link style={navStyle} to='/tech-summary'>
          <li>Tech-Summary</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
