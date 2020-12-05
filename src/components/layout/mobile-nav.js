/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ButtonText } from '../button';
import THEME from '../../constants';

const MobileNavWrapper = styled.div`

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavButton = styled(ButtonText)`
  padding: .5rem 1rem;
`;

const slides = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 25px;
  }
`;

const MobileNavButton = styled.button`
  width: 45px;
  background: none;
  border: none;
  cursor: pointer;

  span {
    border-top: 2px solid black;
    display: block;
    width: 25px;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    font-size: 30px;
    font-weight: bold;
  }

  .top {
    width: 12px;
  }

  .middle {
    width: 20px;
  }

  .bottom {
    margin-bottom: 0;
  }

  &:hover {
    span {
      animation: ${slides} 1s cubic-bezier(0.39, 0.58, 0.57, 1) alternate-reverse both;
      animation-iteration-count: infinite;
    }
    .top {
      animation-delay: 0s;
    }
    .middle {
      animation-delay: .3s;
    }
    .bottom {
      animation-delay: .6s;
    }
  }

  ${(props) => (props.openButton && `
    position: fixed;
    z-index: 1000;
    right: 1rem;
    bottom: 0;

    p {
      font-size: 3rem;
      color: ${THEME.colors.brand.rose};
    }
  `)}

  @media (min-width: 768.4px) {
    display: none;
  }
`;

const MobileNavMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 3;
  transform: translateX(200px);
  box-shadow: 0 0 11px 3px rgba(0, 0, 0, .1);
  width: 200px;
  transition: transform 400ms cubic-bezier(0.39, 0.58, 0.57, 1);
  background: white;
  color: black;

  &.true {
    transform: translateX(0px);
  }
`;

const MobileNavCover = styled.div`
  background: rgba(0, 0, 0, .4);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  position: fixed;
`;

const MobileMenuList = styled.ul`
  margin: 0;
  padding: .5rem;

  li {
    display: block;
    padding: .5rem;
    margin: 1rem 0;

    &:last-of-type {
      margin-right: 0;
    }
  }

  > div > button {
    margin-left: 1.5rem;
  }

  a {
    text-decoration: none;
    font-size: .8rem;
    color: black;
    padding: 0;
  }

  @media (min-width: 768.4px) {
    display: none;
  }
`;

const MobileNav = ({
  navItemsHome, children, isHome, scrollToSection,
}) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <MobileNavWrapper>
      <MobileNavButton
        onClick={toggleOpen}
      >
        {
          open ? (
            <p>
              &times;
            </p>
          ) : (
            <>
              <span className="top" />
              <span className="middle" />
              <span className="bottom" />
            </>
          )
        }
      </MobileNavButton>
      {
        open && (
          <MobileNavCover onClick={toggleOpen} />
        )
      }
      <MobileNavMenu
        className={`mobile-menu ${open}`}
      >
        <MobileMenuList>
          {
            isHome && navItemsHome.map((navItem) => (
              <li key={navItem.selector}>
                <NavButton
                  onClick={() => scrollToSection(navItem.selector)}
                  type="default"
                >
                  {navItem.text}
                </NavButton>
              </li>
            ))
          }
          {children}
        </MobileMenuList>
      </MobileNavMenu>
      {
        open && (
          <MobileNavButton
            onClick={toggleOpen}
            openButton
          >
            <p>
              &times;
            </p>
          </MobileNavButton>
        )
      }
    </MobileNavWrapper>
  );
};

MobileNav.propTypes = {
  navItemsHome: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default MobileNav;
