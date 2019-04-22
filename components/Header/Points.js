import React from 'react';

import Coin from '../shared/Coin';

import { PointsContainer } from './style';

const Points = ({ name, points }) => (
  <PointsContainer>
    <h2>{`${name}`}</h2>
    <div>
      <h2>{`${points}`}</h2>
      <Coin />
    </div>
  </PointsContainer>
);

export default Points;
