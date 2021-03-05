import React from 'react';
import '../css/About.css';

function About() {
  return (
    <div className='about-container'>
      <div className='about-header'>
        <p> Hi, my name is Clifford Okpai and I am a front-end web developer</p>
      </div>
      <div class='about-content'>
        <p>
          When I was a teen, I wasn't quite sure what career path to choose as I
          thought of becoming an Engineer, a doctor, a pilot, a geologist. When
          I was in high school, Engineering was on top of that list and I was
          fond decoupling my transistor radios and handheld games, just out of
          curiosity, to see what's inside that make them work. As you can
          imagine, it didn't always end well for young Clifford, as he may not
          be able to recouple the parts.
        </p>
        <p>
          Prior to the year that I would gain admission into the University of
          Manitoba, I did a 1 year advanced level program where I did Geography
          as major. At this point, I still was not sure where I was headed. In
          my first term at the University of Manitoba, I had the choice of
          taking a few course as electives and I decided to try the
          "Introductory Computer Science" course. I was blown away by what I
          learned in that course, and I never looked back.
        </p>
      </div>
    </div>
  );
}

export default About;
