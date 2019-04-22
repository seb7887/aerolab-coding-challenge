import React from 'react';

import Coin from '../shared/Coin';

import { PointsContainer } from './style';

const Points = ({ name, points }) => (
  <PointsContainer>
    <h2 className='name'>{`${name}`}</h2>
    <div className='touchable'>
      <h2>{`${points}`}</h2>
      <Coin />
    </div>
  </PointsContainer>
);

export default Points;
