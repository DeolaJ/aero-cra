import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Footer from './footer';

const Body = ({
  children,
}) => (
  <>
    <main>
      <Nav />
      {children}
    </main>
    <Footer />
  </>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
