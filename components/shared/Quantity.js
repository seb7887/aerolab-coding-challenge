import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.theme.secondary};
  font-size: 1rem;
  font-weight: bold;
  padding-right: 1rem;
  border-right: 1px solid ${props => props.theme.primary};

  @media (${props => props.theme.md}) {
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

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Quantity;
