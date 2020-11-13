/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class Portal extends React.Component {
  componentDidMount() {
    const { selector } = this.props;
    this.element = document.querySelector(selector);
  }

  render() {
    if (this.element === undefined) {
      return null;
    }

    const { children } = this.props;
    return ReactDOM.createPortal(children, this.element);
  }
}

Portal.propTypes = {
  selector: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
