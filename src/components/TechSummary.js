import React from 'react';

function TechSummary() {
  return (
    <div className='ui container'>
      <div>
        <h2 style={{ marginTop: '5%' }}>
          Percentages are a reflection of my confidence level when working with
          these technologies.
        </h2>
      </div>
      <div className='ui teal active progress'>
        <div className='bar' style={{ width: '75%' }}>
          <div className='progress'>75%</div>
        </div>
        <div className='label'>HTML</div>
      </div>
      <div className='ui black active progress'>
        <div className='bar' style={{ width: '70%', color: 'white' }}>
          <div className='progress'>70%</div>
        </div>
        <div className='label'>CSS</div>
      </div>
      <div className='ui purple active progress'>
        <div className='bar' style={{ width: '80%', color: 'white' }}>
          <div className='progress'>80%</div>
        </div>
        <div className='label'>JavaScript</div>
      </div>
      <div className='ui brown active progress'>
        <div className='bar' style={{ width: '78%', color: 'white' }}>
          <div className='progress'>78%</div>
        </div>
        <div className='label'>React JS</div>
      </div>
      <div className='ui orange active progress'>
        <div className='bar' style={{ width: '65%' }}>
          <div className='progress'>65%</div>
        </div>
        <div className='label'>Redux</div>
      </div>
      <div className='ui blue active progress'>
        <div className='bar' style={{ width: '55%' }}>
          <div className='progress'>55%</div>
        </div>
        <div className='label'>TypeScript</div>
      </div>
      <div className='ui  active violet progress'>
        <div className='bar' style={{ width: '20%' }}>
          <div className='progress'>20%</div>
        </div>
        <div className='label'>GO</div>
      </div>

      <div className='ui grey active progress'>
        <div className='bar' style={{ width: '75%' }}>
          <div className='progress'>75%</div>
        </div>
        <div className='label'>Java</div>
      </div>
    </div>
  );
}

export default TechSummary;
