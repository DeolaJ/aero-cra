/* eslint-disable prefer-template */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

// Horizontal list wrapper
const ListBlock = styled.div`
  background-color: ${(props) => (props.background ? props.background : null)};
  border: ${(props) => (props.border ? props.border : null)};
  display: flex;
  justify-content: ${(props) => (props.leftStart ? 'flex-start' : 'space-between')};
  justify-content: ${(props) => (props.rightEnd ? 'flex-end' : null)};
  align-items: ${(props) => (props.top ? 'flex-start' : 'center')};
  align-items: ${(props) => (props.bottom ? 'flex-end' : null)};

  > * + * {
    margin-left: ${(props) => (props.spacing ? (props.spacing + 'px') : '1.5rem')};
  }

  ${(props) => (props.sticky && `
    position: sticky;
    top: ${`${props.stickyTop}px` || '0'};
  `)}
  
  ${(props) => (props.wrapList && `
    @media (max-width: ${props.wrapList}px) {
      display: block;
      
      > * + * {
        margin-left: 0;
        margin-top: ${props.spacing ? (props.spacing + 'px') : '1.5rem'}
      }
    }
  `)}
`;

const HorList = ({
  direction, children, spacing, background, border, sticky, stickyTop,
  top, leftStart, wrapList, bottom, rightEnd,
}) => (
  <ListBlock
    direction={direction}
    spacing={spacing}
    background={background}
    border={border}
    sticky={sticky}
    stickyTop={stickyTop}
    top={top}
    leftStart={leftStart}
    wrapList={wrapList}
    bottom={bottom}
    rightEnd={rightEnd}
  >
    {children}
  </ListBlock>
);

HorList.defaultProps = {
  direction: 'left',
  spacing: 0,
  background: '',
  border: '',
  sticky: false,
  stickyTop: 0,
  top: false,
  leftStart: false,
  wrapList: 0,
  bottom: false,
  rightEnd: false,
};

HorList.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  spacing: PropTypes.number,
  background: PropTypes.string,
  border: PropTypes.string,
  sticky: PropTypes.bool,
  stickyTop: PropTypes.number,
  top: PropTypes.bool,
  leftStart: PropTypes.bool,
  wrapList: PropTypes.number,
  bottom: PropTypes.bool,
  rightEnd: PropTypes.bool,
};

export default HorList;
