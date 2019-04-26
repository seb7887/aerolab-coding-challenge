import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  @media (${props => props.theme.viewport.sm}) {
    width: 2rem;
  }
`;

const BackButton = () => (
  <Img src='/static/images/arrow-left.svg' alt='Previous Page' />
);

export default BackButton;
