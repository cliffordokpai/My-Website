import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav>
      <h3>
        <i class='laptop icon'></i>
        <i class='keyboard icon'></i>
      </h3>
      <ul className='nav-links'>
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
          <li>Tech Summary</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
