import React from 'react';
import styled from '@emotion/styled';
import HorList from '../partials/horizontal-list';
import Logo from '../images/logo.png';

const LogoSectionWrapper = styled.div`
  margin-top: 3rem;
`;

const LogoContainer = styled.a`
  text-decoration: none;

  img {
    max-width: 90px;
  }
`;

const LogoSection = () => {
  const trustedPartners = [
    {
      id: 1,
      image: Logo,
      text: 'Facebook',
      link: '',
    },
    {
      id: 2,
      image: Logo,
      text: 'Twitter',
      link: '',
    },
    {
      id: 3,
      image: Logo,
      text: 'LinkedIn',
      link: '',
    },
    {
      id: 4,
      image: Logo,
      text: 'Youtube',
      link: '',
    },
    {
      id: 5,
      image: Logo,
      text: 'Instagram',
      link: '',
    },
  ];

  return (
    <LogoSectionWrapper>
      <HorList>
        {
          trustedPartners.map((logos) => (
            <LogoContainer key={logos.id} href={logos.link} rel="noopener noreferrer" target="_blank">
              <img src={logos.image} alt={`${logos.text} company logo`} />
            </LogoContainer>
          ))
        }
      </HorList>
    </LogoSectionWrapper>
  );
};

LogoSection.propTypes = {
};

export default LogoSection;
