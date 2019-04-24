import React from 'react';

import Sort from './Sort';
import Footer from './Footer';

import { ProductsLayout } from './style';

const Products = ({ page, sort, products }) => (
  <ProductsLayout>
    <div id='top'>
      <Sort page={page} sort={sort} total={products.total} />
    </div>
    <div id='filters'>Filters</div>
    <div id='grid'>Grid</div>
    <div id='bottom'>
      <Footer page={page} total={products.total} />
    </div>
  </ProductsLayout>
);

export default Products;
