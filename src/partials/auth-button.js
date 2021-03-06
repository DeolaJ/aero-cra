import React, { useState, useEffect } from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HorList from './horizontal-list';
import { Button } from '../components/button';
import { logout, useAuthState, useAuthDispatch } from '../auth';
import AuthModal from './auth-modal';

const AuthButton = ({
  location, mobile,
}) => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState({
    open: false,
    mode: '',
    type: 'nav',
  });

  const closeModal = () => {
    setOpenModal((currentStatus) => ({
      ...currentStatus,
      open: false,
    }));
  };

  const dispatch = useAuthDispatch();
  const { user } = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    history.replace('/');
  };

  useEffect(() => {
    if (!user && (location.pathname === '/bookings')) {
      setOpenModal((currentStatus) => ({
        ...currentStatus,
        open: true,
        mode: 'login',
        type: 'booking',
      }));
    }
  }, []);

  return (
    <HorList wrapList={mobile ? 768 : null} spacing={16}>
      {
        !user ? (
          <>
            <Button
              text="Sign up"
              type="primary"
              onClick={() => setOpenModal((currentStatus) => ({
                ...currentStatus,
                open: true,
                mode: 'sign-up',
                type: 'nav',
              }))}
            />
            <Button
              text="Login"
              type="secondary"
              onClick={() => setOpenModal((currentStatus) => ({
                ...currentStatus,
                open: true,
                mode: 'login',
                type: 'nav',
              }))}
            />
          </>
        ) : (
          <>
            <Button
              text="Logout"
              type="secondary"
              onClick={handleLogout}
            />
            <Link to="/dashboard">
              <Button
                text="Dashboard"
                type="primary"
              />
            </Link>
          </>
        )
      }
      {
        openModal.open && (
          <AuthModal
            closeModal={closeModal}
            mode={openModal.mode}
            setMode={setOpenModal}
            type={openModal.type}
          />
        )
      }
    </HorList>
  );
};

AuthButton.defaultProps = {
  mobile: false,
};

AuthButton.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  mobile: PropTypes.bool,
};

export default withRouter(AuthButton);
