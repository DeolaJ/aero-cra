import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthState } from '../auth/index';

const PrivateRouteChecker = ({
  children,
}) => {
  const history = useHistory();
  const { user } = useAuthState;
  if (!user) {
    history.replace('/');
    return null;
  }

  return (
    <>
      { children }
    </>
  );
};

PrivateRouteChecker.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouteChecker;
