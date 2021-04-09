import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
  background: radial-gradient(#d3d8a7, #64ac76, #413670);
  height: 85vh;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  height: 85vh;
`;

const CenterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TransparentBackground = styled.div`
  background-color: transparent;
  display: grid;

  .button {
    background-color: seashell;
    &:hover {
      color: white;
      background-color: rgb(78, 80, 80);
    }
  }
`;

const ColoredBackground = styled.div`
  background-color: seashell;
  display: grid;

  .button {
    background-color: rgb(122, 176, 116);

    &:hover {
      color: white;
      background-color: rgb(78, 80, 80);
    }
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  text-align: center;
`;

export default function Projects() {
  return (
    <Main>
      <Container>
        <ColoredBackground>
          <CenterItem>
            <Title>ARMAST</Title>
            <Link target='_blank' to='//cliffdev-armast.netlify.com'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>View Project</div>
                <div className='hidden content'>Click Now</div>
              </div>
            </Link>
            <Text>
              This is a hub for Java Script Arrays, Math, and String methods.
            </Text>
          </CenterItem>
        </ColoredBackground>
        <TransparentBackground>
          <CenterItem>
            <Title>Cliff Blog</Title>

            <a
              target='_blank'
              href='http://ec2-15-223-46-226.ca-central-1.compute.amazonaws.com/'
            >
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>See Project</div>
                <div className='hidden content'>Explore</div>
              </div>
            </a>
            <Text>
              A full stack Blog website with a React front-end, NodeJS and
              MongoDB back-end, and hosted on Amazon AWS.
            </Text>
          </CenterItem>
        </TransparentBackground>
        <TransparentBackground>
          <CenterItem>
            <Title>Online Coffee Shop</Title>

            <Link target='_blank' to='//cliffdev-coffeeshop.netlify.app/'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>Click to Enter</div>
                <div className='hidden content'>Visit Store</div>
              </div>
            </Link>
            <Text>
              This is a online coffee store where customers can add to cart and
              reach checkout. This is still a work in progress.
            </Text>
          </CenterItem>
        </TransparentBackground>
        <ColoredBackground>
          <CenterItem>
            <Title>xChanger</Title>
            <Link target='_blank' to='//cliffdev-xChanger.netlify.com'>
              <div className='ui animated fade button' tabindex='0'>
                <div className='visible content'>Take A Peek</div>
                <div className='hidden content'>Get In</div>
              </div>
            </Link>
            <Text>
              This is a currency converter App using a third-party API.
            </Text>
          </CenterItem>
        </ColoredBackground>
      </Container>
    </Main>
  );
}
