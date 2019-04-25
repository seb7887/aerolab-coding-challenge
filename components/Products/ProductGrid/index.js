import React from 'react';

import Product from '../Product';

import { Grid } from './style';

const ProductGrid = ({ userPoints, products, redeemProduct }) => (
  <Grid>
    {products.map(product => {
      return (
        <Product
          key={product._id}
          product={product}
          userPoints={userPoints}
          redeemProduct={redeemProduct}
        />
      );
    })}
  </Grid>
);

export default ProductGrid;
