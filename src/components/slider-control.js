import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SliderControlWrapper = styled.ul`
  list-style-type: none;
  text-align: center;
  margin: 1rem 0;
`;

const SliderButtonList = styled.li`
  display: inline-block;

  button {
    ${(props) => (props.active ? `
      background-color: black;
    ` : null)}
  }
`;

const SliderButton = styled.button`
  margin: 0 .5rem;
  border: 1px solid black;
  height: 15px;
  background: none;
  border-radius: 50%;
  width: 15px;
`;

const Slider = ({
  itemCount, setCurrentIndex, currentIndex,
}) => (
  <SliderControlWrapper>
    {
      itemCount.map((number) => (
        <SliderButtonList
          key={number}
          active={number === currentIndex}
        >
          <SliderButton
            type="button"
            id={number}
            onClick={() => setCurrentIndex(number)}
            aria-label="slider option"
          />
        </SliderButtonList>
      ))
    }
  </SliderControlWrapper>
);

Slider.propTypes = {
  itemCount: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default Slider;
