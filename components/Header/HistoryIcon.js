import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  @media (${props => props.theme.viewport.sm}) {
    width: 3rem;
  }
`;

const HistoryIcon = () => (
  <Img src='/static/images/history.svg' alt='History' />
);

export default HistoryIcon;
