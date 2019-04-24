import React from 'react';
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
  const pages = Math.ceil(total / perPage);

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
          <a>
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
          <a>
            <NextButton />
          </a>
        </Link>
      )}
    </Container>
  );
};

export default Pagination;
