import React from 'react';
import PropTypes from 'prop-types';

import Quantity from '../../shared/Quantity';
import Filters from './Filters';
import Pagination from '../../shared/Pagination';

import { Container } from './style';

import { perPage } from '../../../config';

const Sort = ({ page, sort, category, total }) => {
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

Sort.propTypes = {
  page: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
};

export default Sort;
