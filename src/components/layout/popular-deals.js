/* eslint-disable prefer-template */
import React from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import Logo from '../../images/logo.png';
import ListItem from '../list-item';
import HorList from '../../partials/horizontal-list';

const PopularDealsWrapper = styled.div`

  @media (min-width: 768px) {
    > div > div {
      justify-content: space-around;
    }
  }
`;

const PopularDealsContentWrapper = styled.div`
`;

const VerList = styled.div`
  ${(props) => (props.centerList && `
    @media (max-width: ${props.centerList}px) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  `)}
`;

const PopularDeals = () => {
  const contentList = [
    {
      id: 1,
      text: 'Lagos to Asaba',
      imageLink: Logo,
    },
    {
      id: 2,
      text: 'Lagos to Port-harcourt',
      imageLink: Logo,
    },
    {
      id: 3,
      text: 'Lagos to Abuja',
      imageLink: Logo,
    },
  ];

  return (
    <PopularDealsWrapper>
      <Section>
        <HorList wrapList={768} spacing={30}>
          <PopularDealsContentWrapper>
            <h2>Most Popular Deals</h2>
          </PopularDealsContentWrapper>
          <PopularDealsContentWrapper>
            <VerList spacing={20} centerList={768}>
              {
                contentList.map((deals) => (
                  <ListItem
                    key={deals.id}
                    type="deals"
                    content={deals}
                  />
                ))
              }
            </VerList>
          </PopularDealsContentWrapper>
        </HorList>
      </Section>
    </PopularDealsWrapper>
  );
};

export default PopularDeals;
