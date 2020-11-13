import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';

import THEME from '../constants';

const SCORE_TO_REMARK = {
  0: {
    color: THEME.colors.error.dark,
    remark: 'Poor',
    width: '10%',
  },
  1: {
    color: THEME.colors.error.dark,
    remark: 'Poor',
    width: '25%',
  },
  2: {
    color: '#EFA74C',
    remark: 'Fair',
    width: '50%',
  },
  3: {
    color: '#3C5A0A',
    remark: 'Good',
    width: '75%',
  },
  4: {
    color: '#6EA515',
    remark: 'Strong',
    width: '100%',
  },
};

const PasswordStrengthRoot = styled.div`
  width: 100%;
`;

const StrengthLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin: 5px 0px;
  text-transform: capitalize;
  & span {
    color: ${(props) => props.color};
    text-transform: uppercase;
  }

  @media (max-width: ${THEME.breakpoints.sm}) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const StrengthIndicator = styled.div`
  background-color: ${(props) => props.color};
  height: 10px;
  border-radius: 4px;
  width: ${(props) => props.width};
`;

const PasswordStrength = ({ password }) => {
  const { score } = zxcvbn(password);

  const result = SCORE_TO_REMARK[score];

  return (
    <PasswordStrengthRoot>
      {
        result && (
          <>
            <StrengthIndicator color={result.color} width={result.width} />
            <StrengthLabel color={result.color}>
              Password Strength:
              {' '}
              <span>{result.remark}</span>
            </StrengthLabel>
          </>
        )
      }
    </PasswordStrengthRoot>
  );
};

PasswordStrength.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordStrength;
