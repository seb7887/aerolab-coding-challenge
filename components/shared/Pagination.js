import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

import BackButton from './BackButton';
import NextButton from './NextButton';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Pagination = ({ category, sort, page, total, perPage }) => {
  const pages = Math.ceil(total / perPage) - 1;

  return (
    <Container>
      {!(page <= 0) && (
        <Link
          prefetch
          href={{
            pathname: '/',
            query: {
              category,
              sort,
              page: page - 1
            }
          }}
        >
          <a data-testid='back-button'>
            <BackButton />
          </a>
        </Link>
      )}
      {!(page >= pages) && (
        <Link
          prefetch
          href={{
            pathname: '/',
            query: {
              category,
              sort,
              page: page + 1
            }
          }}
        >
          <a data-testid='next-button'>
            <NextButton />
          </a>
        </Link>
      )}
    </Container>
  );
};

Pagination.propTypes = {
  page: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired
};

export default Pagination;
