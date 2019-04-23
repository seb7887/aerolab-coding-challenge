import React from 'react';

import { getProducts } from '../services';

import Banner from '../components/Banner';
import Products from '../components/Products';

class Index extends React.Component {
  static async getInitialProps() {
    const products = await getProducts();
    return {
      products
    };
  }

  render() {
    return (
      <>
        <Banner />
        <Products />
      </>
    );
  }
}

export default Index;
