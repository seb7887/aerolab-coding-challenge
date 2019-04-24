import React from 'react';

import { getProducts } from '../services';

import Banner from '../components/Banner';
import Products from '../components/Products';

class Index extends React.Component {
  static async getInitialProps({ query }) {
    const page = query.page ? query.page : 0;
    const products = await getProducts(query);
    return {
      products,
      page
    };
  }

  render() {
    return (
      <>
        <Banner />
        <Products {...this.props} />
      </>
    );
  }
}

export default Index;
