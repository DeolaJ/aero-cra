import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Button } from './button';
import HorList from '../partials/horizontal-list';

const PaginationWrapper = styled.div`
`;

const Pagination = ({
  items, currentPage, resultsPerPage, changeResultPage,
}) => {
  let parts = Math.ceil(items.length / resultsPerPage);
  useEffect(() => {
    parts = Math.ceil(items.length / resultsPerPage);
  }, [items, resultsPerPage]);

  return (
    <PaginationWrapper>
      <HorList spacing={20} rightEnd>
        <Button
          onClick={() => (currentPage > 1) && changeResultPage(currentPage - 1)}
          disabled={currentPage === 1}
          type="secondary icon"
          iconLink="/images/chevron-left.svg"
          text="Previous"
        />
        <HorList spacing={8}>
          <p>{currentPage}</p>
          <p>
            of
            {' '}
            {parts}
          </p>
        </HorList>
        <Button
          onClick={() => (currentPage < parts) && changeResultPage(currentPage + 1)}
          disabled={currentPage === (parts)}
          type="secondary icon"
          iconLink="/images/chevron-right.svg"
          text="Next"
        />
      </HorList>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  resultsPerPage: PropTypes.number.isRequired,
  changeResultPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
