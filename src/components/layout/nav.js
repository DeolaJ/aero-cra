import React, { useState } from 'react';
import styled from '@emotion/styled';
import HeaderContainer from '../../partials/header-container';
import HorList from '../../partials/horizontal-list';
import AuthButton from '../../partials/auth-button';
import Logo from '../../images/logo.png';
import { ButtonIcon } from '../button';

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
  }

  @media (min-width: 768px) {
    
    .header-container {
      flex-direction: row;
    }
  }
`;

const NavControl = styled(ButtonIcon)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    display: none;
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(true);

  return (
    <NavWrapper>
      <HeaderContainer>
        <NavControl
          onClick={() => setOpen((currentOpen) => !currentOpen)}
        >
          <img src={Logo} alt="nav icon" />
        </NavControl>
        <img src={Logo} alt="site logo" />
        {
          open && (
            <HorList>
              {/* <Link>Contact</Link> */}
              <AuthButton />
            </HorList>
          )
        }
      </HeaderContainer>
    </NavWrapper>
  );
};

export default Nav;
