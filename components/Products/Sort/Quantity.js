import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.theme.secondary};
  font-weight: bold;
  padding-right: 1rem;
  border-right: 1px solid ${props => props.theme.primary};

  @media (max-width: 770px) {
    display: none;
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
