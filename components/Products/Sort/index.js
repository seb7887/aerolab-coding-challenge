import React from 'react';

import Quantity from '../../shared/Quantity';
import Filters from './Filters';
import Pagination from '../../shared/Pagination';

import { Container } from './style';

import config from '../../../config';

const Sort = ({ page, sort, total }) => {
  const { perPage } = config;
  const quantity = total > perPage ? (page + 1) * perPage : total;

  return (
    <Container>
      <Quantity quantity={quantity} total={total} />
      <div className='sort'>
        <Filters sort={sort} />
        <Pagination page={page} total={total} perPage={perPage} />
      </div>
    </Container>
  );
};

export default Sort;
