import React from 'react';
import PropTypes from 'prop-types';

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

ProductGrid.propTypes = {
  userPoints: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  redeemProduct: PropTypes.func.isRequired
};

export default ProductGrid;
