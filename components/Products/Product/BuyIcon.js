import React from 'react';
import PropTypes from 'prop-types';

const BuyIcon = ({ color }) => (
  <img src={`/static/images/buy-${color}.svg`} alt='Buy' />
);

BuyIcon.propTypes = {
  color: PropTypes.string.isRequired
};

export default BuyIcon;
