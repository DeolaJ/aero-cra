import React from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import HorList from '../../partials/horizontal-list';
import { Button } from '../button';

const HeaderWrapper = styled.div`

  > section {
    padding-top: 9rem;
    padding-bottom: 10rem;
  }

  @media (min-width: 768px) {

    > section {
      padding-top: 8rem;
      padding-bottom: 16rem;
    }
  }
`;

const HeaderContentWrapper = styled.div`
  max-width: 600px;

  h1 {
    font-size: 3.7rem;
    margin-bottom: 1.5rem;
  }

  h1, p {
    margin-top: 0;
  }

  p {
    line-height: 1.5;
  }
`;

const HeaderContentButtons = styled.div`
  margin-top: 2rem;
`;

const Header = () => (
  <HeaderWrapper>
    <Section backgroundColor="#f9ebd7">
      <HeaderContentWrapper>
        <h1>
          Delivery You Can Trust!
        </h1>
        <p>
          And though the company initially started out in a
          {' '}
          small office where the two of them made up the entire company,
          {' '}
          now it became one of the leading bicycle delivery providers in the area!
        </p>
      </HeaderContentWrapper>
      <HeaderContentButtons>
        <HorList spacing={20} leftStart>
          <Button
            type="primary"
            text="Book now"
          />
          <Button
            type="default"
            text="Learn more"
          />
        </HorList>
      </HeaderContentButtons>
    </Section>
  </HeaderWrapper>
);

export default Header;
