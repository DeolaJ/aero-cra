import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ListItem from './list-item';
import SliderControl from './slider-control';

const ContentSliderWrapper = styled.div``;

const ContentSliderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ContentSlider = ({
  type, items, resultsPerView,
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const recentResultsEndIndex = currentIndex * resultsPerView;
  const firstResultIndex = recentResultsEndIndex - resultsPerView;
  const currentItems = items.slice(firstResultIndex, recentResultsEndIndex);

  const parts = Math.ceil(items.length / resultsPerView);
  const pageNumbers = useMemo(() => {
    const newPageNumbers = [];
    for (let i = 1; i <= parts; i += 1) {
      newPageNumbers.push(i);
    }
    return newPageNumbers;
  }, [parts]);

  return (
    <ContentSliderWrapper>
      <ContentSliderBody>
        {
          currentItems.map((item) => (
            <ListItem
              key={item.id}
              type={type}
              content={item}
            />
          ))
        }
      </ContentSliderBody>
      <SliderControl
        itemCount={pageNumbers}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </ContentSliderWrapper>
  );
};

ContentSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  resultsPerView: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default ContentSlider;
