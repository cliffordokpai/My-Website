import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const style = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgb(78, 80, 80)',
    left: 0,
    padding: '4px',
  };

  return (
    <div style={style}>
      <div>
        <Link target='_blank' to='//ca.linkedin.com/in/clifford-okpai-33375984'>
          <button class='ui linkedin button'>
            <i class='linkedin icon'></i>
            LinkedIn
          </button>
        </Link>
        <Link target='_blank' to='//github.com/C-N-O'>
          <button class='ui github button'>
            <i class='github icon'></i>
            Git Hub
          </button>
        </Link>
      </div>
    </div>
  );
}
