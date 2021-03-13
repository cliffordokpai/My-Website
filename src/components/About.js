import React from 'react';
import styled from 'styled-components';

const Body = styled.body`
  background: radial-gradient(#d3d8a7, #64ac76, #413670);
  display: flex;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: 'Source Code Pro', monospace;
  font-size: 2rem;

  @media screen and (max-width: 458px) {
    font-size: 16px;
    text-align: justify;
    padding: 0 12px;
  }

  @media screen and (max-width: 1536px) {
    text-align: justify;
    margin: 5px;
  }
`;

function About() {
  return (
    <Body>
      <Container>
        <Text>
          Hi, my name is Clifford Okpai and I am a front-end web developer.
          <br />
          <br /> When I was a teen, I wasn't quite sure what career path to
          choose as I thought of becoming an Engineer, a doctor, a pilot, a
          geologist. When I was in high school, Engineering was on top of that
          list and I was fond decoupling my transistor radios and handheld
          games, just out of curiosity, to see what's inside that make them
          work. As you can imagine, it didn't always end well for young
          Clifford, as he may not be able to recouple the parts. <br />
          <br />
          Prior to the year that I would gain admission into the University of
          Manitoba, I did a 1 year advanced level program where I did Geography
          as major. At this point, I still was not sure where I was headed. In
          my first term at the University of Manitoba, I had the choice of
          taking a few course as electives and I decided to try the
          "Introductory Computer Science" course. I was blown away by what I
          learned in that course and amazed at the things I was able to build by
          just coding. Software development became my new passion and I never
          looked back.
        </Text>
      </Container>
    </Body>
  );
}

export default About;
