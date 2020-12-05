import React from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import ContentCarousel from '../content-carousel';
import ListItem from '../list-item';
import HorList from '../../partials/horizontal-list';
import LogoSection from '../logo-section';

const TrustSectionWrapper = styled.div`
`;

const TrustSectionContentWrapper = styled.div`
  display: none;
  margin-top: 3rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

const TrustSectionContentMobile = styled.div`

  @media (min-width: 768px) {
    display: none;
  }
`;

const TrustSection = () => {
  const contentList = [
    {
      id: 1,
      author: 'Alexandra Dias',
      text: 'I sent my old piano to my grandson from Nashville to California for a very funny price. The musical instrument was delivered just on time and in pristine condition.',
    },
    {
      id: 2,
      author: 'Corey Davis',
      text: 'I was glad to receive the set of ancient Italian dishes that my bro sent me. I was really surprised with the entire level of service. Thank you so much!',
    },
  ];

  return (
    <TrustSectionWrapper>
      <Section
        title="What our clients say about us"
        subTitle="Testimonials"
      >
        <TrustSectionContentWrapper>
          <HorList>
            {
              contentList.map((content) => (
                <ListItem
                  key={content.id}
                  type="trust"
                  content={content}
                />
              ))
            }
          </HorList>
        </TrustSectionContentWrapper>
        <TrustSectionContentMobile>
          <ContentCarousel
            items={contentList}
            resultsPerView={1}
            type="trust"
          />
        </TrustSectionContentMobile>
        <LogoSection />
      </Section>
    </TrustSectionWrapper>
  );
};

export default TrustSection;
