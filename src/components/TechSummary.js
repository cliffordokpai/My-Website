import React from 'react';

function TechSummary() {
  return (
    <div className='ui container'>
      <div>
        <h2 style={{ marginTop: '5%' }}>
          Here are some of the technologies I've had the chance to work with or
          want to learn.
        </h2>
      </div>
      <div className='ui teal active progress'>
        <div className='bar' style={{ width: '75%' }}>
          <div className='progress'>75%</div>
        </div>
        <div className='label'>HTML</div>
      </div>
      <div className='ui black active progress'>
        <div className='bar' style={{ width: '68%', color: 'white' }}>
          <div className='progress'>68%</div>
        </div>
        <div className='label'>CSS</div>
      </div>
      <div className='ui purple active progress'>
        <div className='bar' style={{ width: '62%', color: 'white' }}>
          <div className='progress'>62%</div>
        </div>
        <div className='label'>JavaScript</div>
      </div>
      <div className='ui brown active progress'>
        <div className='bar' style={{ width: '45%', color: 'white' }}>
          <div className='progress'>45%</div>
        </div>
        <div className='label'>React JS</div>
      </div>
      <div className='ui orange active progress'>
        <div className='bar' style={{ width: '28%' }}>
          <div className='progress'>28%</div>
        </div>
        <div className='label'>Redux</div>
      </div>
      <div className='ui blue active progress'>
        <div className='bar' style={{ width: '10%' }}>
          <div className='progress'>10%</div>
        </div>
        <div className='label'>TypeScript</div>
      </div>
      <div className='ui violet progress'>
        <div className='bar' style={{ width: '0%' }}>
          <div className='progress'>0%</div>
        </div>
        <div className='label'>GO</div>
      </div>
      <div className='ui grey progress'>
        <div className='bar' style={{ width: '0%' }}>
          <div className='progress'>0%</div>
        </div>
        <div className='label'>Angular JS</div>
      </div>
    </div>
  );
}

export default TechSummary;
