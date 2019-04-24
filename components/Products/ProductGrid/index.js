import React from 'react';

import Product from '../Product';

import { Grid } from './style';

const ProductGrid = ({ products }) => (
  <Grid>
    {products.map(product => {
      return <Product key={product._id} product={product} />;
    })}
  </Grid>
);

export default ProductGrid;
