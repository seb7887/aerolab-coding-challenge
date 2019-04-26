import React from 'react';
import Router from 'next/router';

import { getProducts, redeem } from '../services';

import Banner from '../components/Banner';
import Products from '../components/Products';

class Index extends React.Component {
  static async getInitialProps({ query }) {
    const page = query.page ? query.page : 0;
    const sort = query.sort ? query.sort : 'recent';
    const category = query.category ? query.category : 'all';

    const { products, total } = await getProducts(query);

    return {
      products,
      total,
      page,
      sort,
      category
    };
  }

  redeemProduct = async productId => {
    await redeem(productId);
    Router.push('/history');
  };

  render() {
    return (
      <>
        <Banner>Electronics</Banner>
        <Products {...this.props} redeemProduct={this.redeemProduct} />
      </>
    );
  }
}

export default Index;
