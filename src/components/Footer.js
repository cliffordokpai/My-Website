import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className='ui inverted footer segment form-page'>
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
        <p>cliffordokpai. All rights reserved</p>
      </div>
    </div>
  );
}
