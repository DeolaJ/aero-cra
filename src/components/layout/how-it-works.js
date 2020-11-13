import React from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import ContentCarousel from '../content-carousel';
import ListItem from '../list-item';

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
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
    {
      id: 2,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
    {
      id: 3,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
    {
      id: 4,
      title: 'Random',
      text: 'lorem ipsum jfos odis osidfs oin osndosd oinson',
    },
  ];

  return (
    <HowItWorksWrapper>
      <Section
        title="How it works"
      >
        <HowItWorksContentWrapper>
          {
            contentList.map((content) => (
              <ListItem
                key={content.id}
                type="howto"
                content={content}
              />
            ))
          }
        </HowItWorksContentWrapper>
        <HowItWorksContentMobile>
          <ContentCarousel
            items={contentList}
            resultsPerView={1}
            type="header"
          />
        </HowItWorksContentMobile>
      </Section>
    </HowItWorksWrapper>
  );
};

export default HowItWorks;
