import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  @media (${props => props.theme.viewport.sm}) {
    width: 2rem;
  }
`;

const NextButton = () => (
  <Img src='/static/images/arrow-right.svg' alt='Next Page' />
);

export default NextButton;
