import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from './button';

const JetCardWrapper = styled.div`
  flex: 0 0 29%;
  margin: 2.5%;
  box-shadow: 0px 4px 11px 0px rgba(0, 23, 44, 0.1);
  border-radius: 3px;
`;

const JetBodyWrapper = styled.div`
  padding: 1rem;
`;

const JetTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: .875rem;
  margin-top: 0;
`;

const JetDescription = styled.p`
  font-size: .875rem;
  margin: .5rem 0;
`;

const JetImage = styled.img`
  font-size: .875rem;
  width: 100%;
  margin: .5rem;
  border-radius: 3px 0 0 3px;
`;

const JetLink = styled(Link)`
`;

const JetCard = ({
  image, description, name,
}) => (
  <JetCardWrapper>
    <JetImage src={image} alt="jet" />
    <JetBodyWrapper>
      <JetTitle>
        {name}
      </JetTitle>
      <JetDescription>
        {description}
      </JetDescription>
      <JetLink to="/">
        <Button
          type="secondary"
          text="View details"
        />
      </JetLink>
    </JetBodyWrapper>
  </JetCardWrapper>
);

JetCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default JetCard;
