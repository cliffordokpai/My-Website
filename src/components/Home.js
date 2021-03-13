import React from 'react';
import styled from 'styled-components';

const Body = styled.body`
  background: radial-gradient(#d3d8a7, #64ac76, #413670);
`;

const H1 = styled.h1`
  color: rgb(52, 109, 172);
  font-family: 'Montserrat', sans-serif;
  font-size: 5rem;

  @media screen and (max-width: 458px) {
    font-size: 3rem;
    padding-top: 1em;
  }

  @media screen and (max-width: 1536px) {
    font-size: 4rem;
    padding-top: 1em;
  }
`;

const H3 = styled.h3`
  color: rgb(78, 80, 80);
  font-family: 'Dancing Script', cursive;
  font-size: 3rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 5px;

  @media screen and (max-width: 458px) {
    grid-template-rows: repeat(5, 120px);
    /* grid-gap: 0rem; */
  }
`;

function Home() {
  return (
    <Body>
      <Wrapper>
        <H1>Hello, and welcome!</H1>
        <H3>My name is</H3>
        <H1>Clifford Okpai</H1>
        <H3>and I am a</H3>
        <H1>Front-End Web Developer</H1>
      </Wrapper>
    </Body>
  );
}

export default Home;
