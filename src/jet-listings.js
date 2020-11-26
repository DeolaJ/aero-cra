/* eslint-disable max-lines-per-function */
import React from 'react';
// import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import Body from './components/layout/body';
import Section from './components/section';
import JetCard from './components/jet-card';
import Logo from './images/logo.png';

const JetListingsWrapper = styled.div`

  > section {
    padding-top: 8rem;
    padding-bottom: 10rem;
  }
`;

const JetCardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -2.5%;
  flex-wrap: wrap;
  margin-right: -2.5%;
`;

const JetListings = () => {
  // const location = useLocation();
  // const { jets } = location.state;

  const jets = [2, 3, 4, 5, 6, 7, 56, 564, 445, 5656, 3434, 4525, 25];

  return (
    <Body>
      <JetListingsWrapper>
        <Section>
          <h1>Avaliable Jets</h1>
          <JetCardWrapper>
            {
              jets.map((jet) => (
                <JetCard
                  key={jet}
                  name="Hilux"
                  image={Logo}
                  description="I am a jet"
                />
              ))
            }
          </JetCardWrapper>
        </Section>
      </JetListingsWrapper>
    </Body>
  );
};

export default JetListings;
