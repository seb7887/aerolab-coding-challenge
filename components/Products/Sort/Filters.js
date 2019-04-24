import React from 'react';
import styled from 'styled-components';

import Button from '../../shared/Button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .title {
    margin-right: 1rem;
    @media (max-width: 650px) {
      margin: 0;
      display: none;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Filters = ({ sort }) => (
  <Container>
    <div className='title'>Sort by:</div>
    <div className='buttons'>
      <Button isActive={sort === 'recent'}>Most recent</Button>
      <Button isActive={sort === 'low'}>Lower price</Button>
      <Button isActive={sort === 'high'}>Higher price</Button>
    </div>
  </Container>
);

export default Filters;
