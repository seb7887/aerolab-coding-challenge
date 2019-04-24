import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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

  a {
    margin-right: 1rem;
    letter-spacing: 0.5px;
    text-align: center;
    padding: 9px 12px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    background-color: ${props => props.theme.bg};
    cursor: pointer;

    &.current {
      background-color: ${props => props.theme.orange};
      color: ${props => props.theme.white};
      cursor: default;
    }

    &:hover {
      background-color: ${props => props.theme.orange};
      color: ${props => props.theme.white};
    }
  }
`;

const Filters = ({ category, sort, page }) => {
  const isRecent = sort === 'recent';
  const isLow = sort === 'low';
  const isHigh = sort === 'high';

  return (
    <Container>
      <div className='title'>Sort by:</div>
      <div className='buttons'>
        <Link href={`?category=${category}&sort=recent&page=${page}`}>
          <a className={isRecent ? 'current' : ''}>Most recent</a>
        </Link>
        <Link href={`?category=${category}&sort=low&page=${page}`}>
          <a className={isLow ? 'current' : ''}>Lower price</a>
        </Link>
        <Link href={`?category=${category}&sort=high&page=${page}`}>
          <a className={isHigh ? 'current' : ''}>Higher price</a>
        </Link>
      </div>
    </Container>
  );
};

export default Filters;
