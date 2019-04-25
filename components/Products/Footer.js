import React from 'react';
import styled from 'styled-components';

import Quantity from '../shared/Quantity';
import Pagination from '../shared/Pagination';

import config from '../../config';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${props => props.theme.grey};

  @media (max-width: 770px) {
    justify-content: flex-end;
  }
`;

const Footer = ({ page, total }) => {
  const { perPage } = config;
  const quantity = total > perPage ? (parseInt(page, 10) + 1) * perPage : total;

  return (
    <Container>
      <Quantity quantity={quantity} total={total} />
      <Pagination page={page} total={total} perPage={perPage} />
    </Container>
  );
};

export default Footer;
