import React from 'react';
import styled from 'styled-components';

import { flipCoin } from './animations';

const Img = styled.img`
  animation: ${flipCoin} 8s infinite;
  animation-delay: 3s;

  @media (${props => props.theme.viewport.sm}) {
    width: 1.5rem;
  }
`;

const Coin = () => <Img src='/static/images/coin.svg' alt='Coin' />;

export default Coin;
