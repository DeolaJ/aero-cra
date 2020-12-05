import React from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import ListItem from '../list-item';
import HorList from '../../partials/horizontal-list';
import Star from '../../images/star.svg';
import Delivery from '../../images/delivery.svg';
import Phone from '../../images/phone.svg';
import Timer from '../../images/timer.svg';

const NewsFeedWrapper = styled.div`
`;

const NewsFeedContentWrapper = styled.div`

  > div {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {

    > div {
      justify-content: space-between;
    }

    > div > * {
      flex: 1 0 47%;
    }
  }
`;

const NewsFeed = () => {
  const contentList = [
    {
      id: 1,
      createdAt: '2020-12-01',
      imageLink: Star,
      title: 'Any Location',
      text: 'Messengers carry many items, from things that could not be sent by digital means .',
    },
    {
      id: 2,
      createdAt: '2020-12-01',
      imageLink: Phone,
      title: 'Kind Support',
      text: 'We make our customers, employees and investors more successful.',
    },
    {
      id: 3,
      createdAt: '2020-12-01',
      imageLink: Timer,
      title: '24/7 Just for You',
      text: 'Our team delivers your packages and documents 24 hours a day.',
    },
    {
      id: 4,
      createdAt: '2020-12-01',
      imageLink: Delivery,
      title: 'Delivery in 60min',
      text: 'If we fail to deliver your parcel just in time, we will do this at no charge.',
    },
  ];

  return (
    <NewsFeedWrapper className="news-feed-section">
      <Section
        miniHeader
        title="News Feed"
        backgroundColor="#f9c3d5"
      >
        <NewsFeedContentWrapper>
          <HorList wrapList={600} top>
            {
              contentList.map((content) => (
                <ListItem
                  key={content.id}
                  type="news-feed"
                  content={content}
                />
              ))
            }
          </HorList>
        </NewsFeedContentWrapper>
      </Section>
    </NewsFeedWrapper>
  );
};

export default NewsFeed;
