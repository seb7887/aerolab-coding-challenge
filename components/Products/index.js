import React from 'react';

import Sort from './Sort';
import Categories from './Categories';
import ProductGrid from './ProductGrid';
import Footer from './Footer';

import { ProductsLayout } from './style';

const Products = ({ me, page, sort, category, products, redeemProduct }) => (
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
      <ProductGrid
        products={products.products}
        userPoints={me.points}
        redeemProduct={redeemProduct}
      />
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
