import React from 'react';
import Link from 'next/link';
import shortid from 'shortid';

import { Container } from './style';

const categories = [
  'all',
  'gaming',
  'laptops',
  'tablets',
  'cameras',
  'audio',
  'tv',
  'drones',
  'accessories',
  'home'
];

const Categories = ({ category, sort }) => (
  <Container>
    <h3>Categories</h3>
    <>
      {categories.map(name => {
        const isCurrent = name === category;
        return (
          <Link
            prefetch
            href={{
              pathname: '/',
              query: {
                category: name,
                sort,
                page: 0
              }
            }}
            key={shortid.generate()}
          >
            <a className={isCurrent ? 'current' : ''}>{name}</a>
          </Link>
        );
      })}
    </>
  </Container>
);

export default Categories;
