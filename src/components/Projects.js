import React from 'react';
import '../css/Projects.css';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className='container'>
      <div className='project-1'>
        <div className='center'>
          <span className='name'>
            <h2>ARMAST</h2>
          </span>
          <Link target='_blank' to='//cliffdev-armast.netlify.com'>
            <div class='ui animated fade button' tabindex='0'>
              <div class='visible content'>View Project</div>
              <div class='hidden content'>Click Now</div>
            </div>
          </Link>
          <span className='about'>
            <p>
              This is a hub for Java Script Arrays, Math, and String methods.
            </p>
          </span>
        </div>
      </div>
      <div className='project-2'>
        <div className='center'>
          <span className='name'>
            <h2></h2>
          </span>
          <button className='ui button'>Coming Soon...</button>
          <span className='about'>
            <p></p>
          </span>
        </div>
      </div>
      <div className='project-3'>
        <div className='center'>
          <span className='name'>
            <h4></h4>
          </span>
          <button className='ui button'>Coming Soon...</button>
          <span className='about'>
            <p></p>
          </span>
        </div>
      </div>
      <div className='project-4'>
        <div className='center'>
          <span className='name'>
            <h2>xChanger</h2>
          </span>
          <Link target='_blank' to='//cliffdev-xChanger.netlify.com'>
            <div class='ui animated fade button' tabindex='0'>
              <div class='visible content'>Take A Peek</div>
              <div class='hidden content'>Get In</div>
            </div>
          </Link>
          <span className='about'>
            <p>This is a currency converter App using a third-party API.</p>
          </span>
        </div>
      </div>
    </div>
  );
}
