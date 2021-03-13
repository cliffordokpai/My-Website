import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const style = {
    position: 'fixed',
    height: '5vh',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgb(78, 80, 80)',
    left: 0,
    padding: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const email = {
    backgroundColor: '#7934f7',
    color: '#ffffff',
  };

  return (
    <div style={style}>
      <div>
        <Link target='_blank' to='//ca.linkedin.com/in/cliffordokpai'>
          <button className='ui linkedin button'>
            <i className='linkedin icon'></i>
            LinkedIn
          </button>
        </Link>
        <Link target='_blank' to='//github.com/C-N-O'>
          <button className='ui github button'>
            <i className='github icon'></i>
            Git Hub
          </button>
        </Link>
        <a href='mailto:cliffordokpai@yahoo.ca'>
          <button style={email} className='ui email button'>
            <i className='envelope outline icon'></i>
            Email
          </button>
        </a>
      </div>
    </div>
  );
}
