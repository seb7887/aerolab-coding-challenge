import React from 'react';

import Sort from './Sort';
import Categories from './Categories';
// TODO: saca esto y reemplaza por ProductGrid
import ProductGrid from './ProductGrid';
import Footer from './Footer';

import { ProductsLayout } from './style';

const Products = ({ page, sort, category, products }) => (
  <ProductsLayout>
    <div id='top'>
      <Sort
        category={category}
        sort={sort}
        page={page}
        total={products.total}
      />
    </div>
    <div id='filters'>
      <Categories category={category} sort={sort} />
    </div>
    <div id='grid'>
      <ProductGrid products={products.products} />
    </div>
    <div id='bottom'>
      <Footer
        category={category}
        sort={sort}
        page={page}
        total={products.total}
      />
    </div>
  </ProductsLayout>
);

export default Products;
