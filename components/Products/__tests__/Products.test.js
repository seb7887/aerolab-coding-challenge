import { render } from 'react-testing-library';

import Products from '../index';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

import { fakeUser, fakeProducts } from '../../../utils/testUtils';

const mockRedeemProduct = jest.fn();

const mockProps = {
  me: fakeUser,
  page: '0',
  sort: 'recent',
  category: 'all',
  products: fakeProducts,
  total: fakeProducts.length,
  redeemProduct: mockRedeemProduct
};

const renderProducts = props => render(<Products {...props} />);

describe('Products', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = renderProducts(mockProps);

    expect(asFragment()).toMatchSnapshot();
  });
});
