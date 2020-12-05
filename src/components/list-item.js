import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Button } from './button';
import THEME from '../constants';
import Quotes from '../images/quotes.svg';
import HorList from '../partials/horizontal-list';

const ContentWrapper = styled.article`
  ${(props) => (props.type === 'trust' && `
    box-shadow: 0px 10px 34px 0px rgba(0, 23, 44, 0.1);
    padding: .875rem;
    border-radius: 1rem;
  `)}

  ${(props) => (props.type === 'deals' && `
    box-shadow: 0px 4px 11px 0px rgba(0, 23, 44, 0.1);
    border-radius: 3px;
    max-width: 350px;

    img {
      width: 100%;
    }

    + article {
      margin-top: 2rem;
    }
  `)}

  ${(props) => (props.type === 'news-feed' && `
    margin-bottom: 2rem;
    
    img {
      width: 100%;
    }

    + article.news-feed {
      margin-left: 0;
    }
  `)}
`;

const ContentImageWrapper = styled.div`
  padding: 1.2rem;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  background-color: white;

  ${(props) => (props.type === 'news-feed' && `
    padding: 0;
    border-radius: .2rem;
    flex: 0 0 20%;
    background: transparent;

    img {
      width: 100%;
    }
  `)}
`;

const ContentTitle = styled.h4`
  color: ${THEME.colors.grey[600]};

  + span {
    margin-top: -.3rem;
  }
`;

const ContentTitleSub = styled.span`
  color: ${THEME.colors.grey[300]};
  display: block;
  margin-bottom: .5rem;
`;

const ContentAuthor = styled.p`
  text-align: right;
  margin-bottom: 0;
`;

const ContentDescription = styled.p`
  color: ${THEME.colors.grey[800]};
  line-height: 1.5;
`;

const ContentImage = styled.img`
  width: 50px;
`;

const ContentBodyWrapper = styled.div`
  padding: 1.5rem;
  background-color: white;

  ${(props) => (props.type === 'news-feed' && `
    background: transparent;
  `)}
`;

const ListItem = ({
  type, content,
}) => {
  switch (type) {
    case 'about-us': {
      return (
        <ContentWrapper>
          <ContentImageWrapper>
            <ContentImage src={content.imageLink} alt={content.title} />
          </ContentImageWrapper>
          <ContentTitle>
            {content.title}
          </ContentTitle>
          <ContentDescription>
            {content.text}
          </ContentDescription>
        </ContentWrapper>
      );
    }

    case 'news-feed': {
      return (
        <ContentWrapper type={type} className="news-feed">
          <HorList>
            <ContentImageWrapper type={type}>
              <ContentImage src={content.imageLink} alt={content.title} />
            </ContentImageWrapper>
            <ContentBodyWrapper type={type}>
              <ContentTitle>
                {content.title}
              </ContentTitle>
              <ContentTitleSub>
                {content.createdAt}
              </ContentTitleSub>
              <ContentDescription>
                {content.text}
              </ContentDescription>
            </ContentBodyWrapper>
          </HorList>
        </ContentWrapper>
      );
    }

    case 'deals': {
      const scrollToBooking = () => {
        if (typeof window !== 'undefined') {
          // eslint-disable-next-line no-undef
          const booking = document.querySelector('.bookings');
          booking.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };
      return (
        <ContentWrapper type={type}>
          <ContentImage src={content.imageLink} alt={content.text} />
          <ContentBodyWrapper>
            <HorList>
              <ContentDescription>
                {content.text}
              </ContentDescription>
              <Button
                type="secondary"
                text="Book now"
                onClick={scrollToBooking}
              />
            </HorList>
          </ContentBodyWrapper>
        </ContentWrapper>
      );
    }

    case 'trust': {
      return (
        <ContentWrapper type={type}>
          <ContentImage src={Quotes} alt="Quotes" />
          <ContentTitle>
            {content.text}
          </ContentTitle>
          <ContentAuthor>
            <strong>
              {content.author}
            </strong>
          </ContentAuthor>
        </ContentWrapper>
      );
    }

    default: return null;
  }
};

ListItem.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string, PropTypes.number, PropTypes.array,
    ]),
  ).isRequired,
};

export default ListItem;
