import React from 'react';

import { ProductsLayout } from './style';

const Products = () => (
  <ProductsLayout>
    <div id='top'>Sorting</div>
    <div id='filters'>Filters</div>
    <div id='grid'>Grid</div>
    <div id='bottom'>Pagination</div>
  </ProductsLayout>
);

export default Products;
