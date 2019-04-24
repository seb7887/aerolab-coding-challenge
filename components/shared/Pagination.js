import React from 'react';
import styled from 'styled-components';

import BackButton from './BackButton';
import NextButton from './NextButton';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Pagination = ({ page, total, perPage }) => {
  const pages = Math.ceil(total / perPage);

  return (
    <Container>
      {!(page <= 0) && <BackButton />}
      {!(page >= pages) && <NextButton />}
    </Container>
  );
};

export default Pagination;
