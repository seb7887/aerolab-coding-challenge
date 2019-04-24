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

const Categories = ({ category, sort, page }) => (
  <Container>
    <h3>Categories</h3>
    <>
      {categories.map(name => {
        const isCurrent = name === category;
        return (
          <Link
            href={`?category=${name}&sort=${sort}&page=${page}`}
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
