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

  const email={
    backgroundColor: '#7934f7',
    color: '#ffffff'
  }

  return (
    <div style={style}>
      <div>
        <Link target='_blank' to='//ca.linkedin.com/in/cliffordokpai'>
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
        <a href='mailto:cliffordokpai@yahoo.ca'>
          <button style={email} class='ui email button'>
            <i class='envelope outline icon'></i>
            Email
          </button>
        </a>
      </div>
    </div>
  );
}
