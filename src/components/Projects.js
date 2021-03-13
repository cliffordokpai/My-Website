import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Body = styled.body`
  background: radial-gradient(#d3d8a7, #64ac76, #413670);
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  grid-gap: 5px;
  height: 85vh;
`;

const CenterItem = styled.div`
  margin: auto;
`;

const TransparentBackground = styled.div`
  background-color: transparent;
  display: grid;
`;

const ColoredBackground = styled.div`
  background-color: seashell;
  display: grid;
`;

export default function Projects() {
  return (
    <Body>
      <Container>
        <ColoredBackground>
          <CenterItem>
            <h2>ARMAST</h2>
            <Link target='_blank' to='//cliffdev-armast.netlify.com'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>View Project</div>
                <div className='hidden content'>Click Now</div>
              </div>
            </Link>
            <span className='about'>
              <p>
                This is a hub for Java Script Arrays, Math, and String methods.
              </p>
            </span>
          </CenterItem>
        </ColoredBackground>
        <TransparentBackground>
          <CenterItem>
            <h2>React + Google Sheets + AWS Amplify</h2>

            <Link target='_blank' to='//master.dhg8trjobqeci.amplifyapp.com/'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>See Project</div>
                <div className='hidden content'>Explore</div>
              </div>
            </Link>
            <span className='about'>
              <p>
                This App uses Google sheets as a database. Data can be added and
                retrieved from the sheet.
              </p>
            </span>
          </CenterItem>
        </TransparentBackground>
        <TransparentBackground>
          <CenterItem>
            <button className='ui button'>Coming Soon...</button>
            <span className='about'></span>
          </CenterItem>
        </TransparentBackground>
        <ColoredBackground>
          <CenterItem>
            <h2>xChanger</h2>
            <Link target='_blank' to='//cliffdev-xChanger.netlify.com'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>Take A Peek</div>
                <div className='hidden content'>Get In</div>
              </div>
            </Link>
            <span className='about'>
              <p>This is a currency converter App using a third-party API.</p>
            </span>
          </CenterItem>
        </ColoredBackground>
      </Container>
    </Body>
  );
}
