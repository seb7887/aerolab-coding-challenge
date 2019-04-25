import { render } from 'react-testing-library';

import Products from '../index';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

import { fakeUser, fakeProducts } from '../../../utils/testUtils';

const mockRedeemProduct = jest.fn();
const page = 0;
const sort = 'recent';
const category = 'all';
const products = {
  products: fakeProducts,
  total: fakeProducts.length
};

describe('Products', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = render(
      <Products
        me={fakeUser}
        page={page}
        sort={sort}
        category={category}
        products={products}
        redeemProduct={mockRedeemProduct}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
