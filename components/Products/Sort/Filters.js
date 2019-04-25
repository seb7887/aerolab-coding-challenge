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

const Filters = ({ category, sort }) => {
  const isRecent = sort === 'recent';
  const isLow = sort === 'low';
  const isHigh = sort === 'high';

  return (
    <Container>
      <div className='title'>Sort by:</div>
      <div className='buttons'>
        <Link
          prefetch
          href={{
            pathname: '/',
            query: {
              category,
              sort: 'recent',
              page: 0
            }
          }}
        >
          <a className={isRecent ? 'current' : ''} data-testid='sort-filter'>
            Most recent
          </a>
        </Link>
        <Link
          prefetch
          href={{
            pathname: '/',
            query: {
              category,
              sort: 'low',
              page: 0
            }
          }}
        >
          <a className={isLow ? 'current' : ''} data-testid='sort-filter'>
            Lower price
          </a>
        </Link>
        <Link
          prefetch
          href={{
            pathname: '/',
            query: {
              category,
              sort: 'high',
              page: 0
            }
          }}
        >
          <a className={isHigh ? 'current' : ''} data-testid='sort-filter'>
            Higher price
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Filters;
