import React from 'react';

import Sort from './Sort';
import Categories from './Categories';
import ProductGrid from './ProductGrid';
import Footer from './Footer';

import { ProductsLayout } from './style';

const Products = props => {
  const { me } = props;
  const userPoints = me.points;

  return (
    <ProductsLayout>
      <div id='top'>
        <Sort {...props} />
      </div>
      <div id='filters'>
        <Categories {...props} />
      </div>
      <div id='grid'>
        <ProductGrid {...props} userPoints={userPoints} />
      </div>
      <div id='bottom'>
        <Footer {...props} />
      </div>
    </ProductsLayout>
  );
};

export default Products;
