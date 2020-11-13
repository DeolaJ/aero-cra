/* eslint-disable prefer-template */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const HeaderBlock = styled.div`
  padding: ${(props) => (props.mini ? '.87rem 1.5rem' : '2rem 2.5rem')};
  padding-left: ${(props) => (props.leftPadding !== -1 ? (props.leftPadding + 'px') : null)};
  padding-right: ${(props) => (props.rightPadding !== -1 ? (props.rightPadding + 'px') : null)};
  background-color: ${(props) => (props.background ? props.background : null)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.sticky {
    position: sticky;
    top: 0;
    z-index: 2;
  }
`;

const HeaderContainer = ({
  mini, children, sticky, background, leftPadding, rightPadding,
}) => (
  <HeaderBlock
    mini={mini}
    background={background}
    className={sticky ? 'sticky header-container' : 'header-container'}
    leftPadding={leftPadding}
    rightPadding={rightPadding}
  >
    {children}
  </HeaderBlock>
);

HeaderContainer.defaultProps = {
  mini: false,
  sticky: false,
  background: '',
  leftPadding: -1,
  rightPadding: -1,
};

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
  mini: PropTypes.bool,
  sticky: PropTypes.bool,
  background: PropTypes.string,
  leftPadding: PropTypes.number,
  rightPadding: PropTypes.number,
};

export default HeaderContainer;
