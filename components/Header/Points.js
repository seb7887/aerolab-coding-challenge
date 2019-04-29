import React from 'react';
import PropTypes from 'prop-types';

import Coin from '../shared/Coin';

import { PointsContainer } from './style';

const Points = ({ name, points, addPoints }) => (
  <PointsContainer onClick={addPoints} data-testid='points'>
    <h2 className='name'>{`${name}`}</h2>
    <div className='touchable'>
      <h2>{`${points}`}</h2>
      <Coin />
    </div>
  </PointsContainer>
);

Points.propTypes = {
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  addPoints: PropTypes.func.isRequired
};

export default Points;
