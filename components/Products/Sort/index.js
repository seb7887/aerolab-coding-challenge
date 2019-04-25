import React from 'react';

import Quantity from '../../shared/Quantity';
import Filters from './Filters';
import Pagination from '../../shared/Pagination';

import { Container } from './style';

import config from '../../../config';

const Sort = ({ page, sort, category, total }) => {
  const { perPage } = config;
  const quantity = total > perPage ? (parseInt(page, 10) + 1) * perPage : total;

  return (
    <Container>
      <Quantity quantity={quantity} total={total} />
      <div className='sort'>
        <Filters category={category} sort={sort} />
        <Pagination
          category={category}
          sort={sort}
          page={page}
          total={total}
          perPage={perPage}
        />
      </div>
    </Container>
  );
};

export default Sort;
