import React from 'react';

import Product from '../Product';

import { Grid } from './style';

const ProductGrid = ({ userPoints, products }) => (
  <Grid>
    {products.map(product => {
      return (
        <Product key={product._id} product={product} userPoints={userPoints} />
      );
    })}
  </Grid>
);

export default ProductGrid;
