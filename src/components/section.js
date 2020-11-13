import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SectionWrapper = styled.section`
  padding: 3rem;

  ${(props) => (props.backgroundColor && `
    background-color: ${props.backgroundColor};
  `)};
  
  ${(props) => (props.backgroundImage && `
    background: url(${props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
  `)};

  .filter-group {
    flex-basis: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__left {
      .dropdown {
        padding: .6rem;
        border-radius: .4rem;
      }
    }

    &__right {
      flex-basis: 50%;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  padding: .5rem;
  font-size: ${(props) => (props.miniHeader && '20px')};

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    height: 3px;
    width: 80px;
    background-color: rgba(0, 0, 0, .7);
    left: 50%;
    transform: translateX(-50%);
  }
`;

const SectionSubTitle = styled.p`
  position: relative;
  text-align: center;
`;

const SectionBody = styled.div`
  margin-top: 1rem;
`;

const Section = ({
  children, title, subTitle, miniHeader, backgroundImage,
  backgroundColor,
}) => (
  <SectionWrapper
    backgroundColor={backgroundColor}
    backgroundImage={backgroundImage}
  >
    {
      title && (
        <SectionTitle
          miniHeader={miniHeader}
        >
          {title}
        </SectionTitle>
      )
    }
    {
      subTitle && (
        <SectionSubTitle>
          {subTitle}
        </SectionSubTitle>
      )
    }
    <SectionBody>
      {children}
    </SectionBody>
  </SectionWrapper>
);

Section.defaultProps = {
  miniHeader: false,
  title: '',
  subTitle: '',
  backgroundColor: '',
  backgroundImage: '',
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  miniHeader: PropTypes.bool,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Section;
