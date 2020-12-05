import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import HorList from '../../partials/horizontal-list';
import { ButtonText } from '../button';

const NavButton = styled(ButtonText)`
  padding: .5rem 0;
`;

const DesktopMenuWrapper = styled.div`
  margin: 0;
  padding 0;

  li {
  }

  a {
    text-decoration: none;
    font-size: .8rem;
    padding: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopMenuItem = styled.div`
  display: inline-block;
  padding: .5rem;
  margin: 0 .5rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

const DesktopNav = ({
  navItemsHome, children, isHome, scrollToSection,
}) => (
  <DesktopMenuWrapper>
    <HorList spacing={16}>
      {
        isHome && navItemsHome.map((navItem) => (
          <DesktopMenuItem key={navItem.selector}>
            <NavButton
              onClick={() => scrollToSection(navItem.selector)}
              type="default"
            >
              {navItem.text}
            </NavButton>
          </DesktopMenuItem>
        ))
      }
      {children}
    </HorList>
  </DesktopMenuWrapper>
);

DesktopNav.propTypes = {
  navItemsHome: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default DesktopNav;
