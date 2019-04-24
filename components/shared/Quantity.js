import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.theme.secondary};
  font-size: 1rem;
  font-weight: bold;
  padding-right: 1rem;
  border-right: 1px solid ${props => props.theme.primary};

  @media (max-width: 770px) {
    display: none;
  }

  @media (max-width: 650px) {
    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

const Quantity = ({ quantity, total }) => (
  <Container>
    <span>
      {quantity} of {total}
    </span>{' '}
    products
  </Container>
);

export default Quantity;
