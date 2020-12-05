import React from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import HeaderContainer from '../../partials/header-container';
import AuthButton from '../../partials/auth-button';
import MobileNav from './mobile-nav';
import DesktopNav from './desktop-nav';
import LanguageDropdown from './language-dropdown';
import Logo from '../../images/logo.png';
import HorList from '../../partials/horizontal-list';

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  img {
    max-width: 102px;
  }

  .header-container {
    flex-direction: column;
    
    > div {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    
    .header-container {
      flex-direction: row;
    }
  }
`;

const Nav = () => {
  const navItemsHome = [
    {
      text: 'About us',
      selector: '.about-us-section',
    },
    {
      text: 'How it works',
      selector: '.hiw-section',
    },
    {
      text: 'Contact us',
      selector: '.contact-us-section',
    },
  ];

  const location = useLocation();

  const scrollToSection = (selector) => {
    // eslint-disable-next-line no-undef
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const isHome = location.pathname === '/';

  return (
    <NavWrapper>
      <HeaderContainer>
        <HorList>
          <img src={Logo} alt="site logo" />
          <DesktopNav
            navItemsHome={navItemsHome}
            isHome={isHome}
            scrollToSection={scrollToSection}
          >
            <AuthButton />
            <LanguageDropdown />
          </DesktopNav>
          <MobileNav
            navItemsHome={navItemsHome}
            isHome={isHome}
            scrollToSection={scrollToSection}
          >
            <AuthButton mobile />
            <LanguageDropdown />
          </MobileNav>
        </HorList>
      </HeaderContainer>
    </NavWrapper>
  );
};

export default Nav;
