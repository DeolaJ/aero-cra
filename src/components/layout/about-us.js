import React from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import ListItem from '../list-item';
import HorList from '../../partials/horizontal-list';
import Star from '../../images/star.svg';
import Delivery from '../../images/delivery.svg';
import Phone from '../../images/phone.svg';
import Timer from '../../images/timer.svg';
import THEME from '../../constants';

const AboutUsWrapper = styled.div`
`;

const AboutUsContentWrapper = styled.div`

  > div {
    justify-content: center;
  }

  @media (min-width: 768px) {

    > div {
      justify-content: space-between;
    }
  }
`;

const AboutUs = () => {
  const contentList = [
    {
      id: 1,
      imageLink: Star,
      title: 'Any Location',
      text: 'Messengers carry many items, from things that could not be sent by digital means .',
    },
    {
      id: 2,
      imageLink: Phone,
      title: 'Kind Support',
      text: 'We make our customers, employees and investors more successful.',
    },
    {
      id: 3,
      imageLink: Timer,
      title: '24/7 Just for You',
      text: 'Our team delivers your packages and documents 24 hours a day.',
    },
    {
      id: 4,
      imageLink: Delivery,
      title: 'Delivery in 60min',
      text: 'If we fail to deliver your parcel just in time, we will do this at no charge.',
    },
  ];

  return (
    <AboutUsWrapper>
      <Section
        miniHeader
        title="Why us"
        subTitle="Our benefits"
        backgroundColor={THEME.colors.brand.baby_blue}
      >
        <AboutUsContentWrapper>
          <p>
            Why using our delivery services? We guarantee that your sending
            {' '}
            will be delivered safely and in time to any point of our planet. Our delivery
            {' '}
            company built thousands of depots in dozens of countries all around the Globe to provide
            {' '}
            our clients with high-quality international delivery services.
          </p>
          <HorList spacing={40} wrapList={600}>
            {
              contentList.map((content) => (
                <ListItem
                  key={content.id}
                  type="about-us"
                  content={content}
                />
              ))
            }
          </HorList>
        </AboutUsContentWrapper>
      </Section>
    </AboutUsWrapper>
  );
};

export default AboutUs;
