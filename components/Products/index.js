import React from 'react';

import Sort from './Sort';

import { ProductsLayout } from './style';

const Products = ({ products }) => (
  <ProductsLayout>
    <div id='top'>
      <Sort total={products.total} />
    </div>
    <div id='filters'>Filters</div>
    <div id='grid'>Grid</div>
    <div id='bottom'>Pagination</div>
  </ProductsLayout>
);

export default Products;
