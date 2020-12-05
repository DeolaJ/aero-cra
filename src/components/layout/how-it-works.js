import React from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import ContentCarousel from '../content-carousel';
import ListItem from '../list-item';
import Star from '../../images/star.svg';
import Delivery from '../../images/delivery.svg';
import Phone from '../../images/phone.svg';
import Timer from '../../images/timer.svg';

const HowItWorksWrapper = styled.div`
`;

const HowItWorksContentWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const HowItWorksContentMobile = styled.div`

  @media (min-width: 768px) {
    display: none;
  }
`;

const HowItWorks = () => {
  const contentList = [
    {
      id: 1,
      imageLink: Star,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
    {
      id: 2,
      imageLink: Phone,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
    {
      id: 3,
      imageLink: Timer,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
    {
      id: 4,
      imageLink: Delivery,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
  ];

  return (
    <HowItWorksWrapper className="hiw-section">
      <Section
        title="How it works"
      >
        <HowItWorksContentWrapper>
          {
            contentList.map((content) => (
              <ListItem
                key={content.id}
                type="about-us"
                content={content}
              />
            ))
          }
        </HowItWorksContentWrapper>
        <HowItWorksContentMobile>
          <ContentCarousel
            items={contentList}
            resultsPerView={1}
            type="about-us"
          />
        </HowItWorksContentMobile>
      </Section>
    </HowItWorksWrapper>
  );
};

export default HowItWorks;
