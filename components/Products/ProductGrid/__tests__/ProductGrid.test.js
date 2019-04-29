import { render } from 'react-testing-library';

import ProductGrid from '../index';

import { generateProducts, fakeProducts } from '../../../../utils/testUtils';

const mockRedeemProduct = jest.fn();

const userPoints = 300;
const products = generateProducts(3);

const renderProducts = (userPoints, products, redeem) =>
  render(
    <ProductGrid
      userPoints={userPoints}
      products={products}
      redeemProduct={redeem}
    />
  );

describe('ProductGrid', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = renderProducts(
      userPoints,
      fakeProducts,
      mockRedeemProduct
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display a correct quantity of products', () => {
    const { getAllByTestId } = renderProducts(
      userPoints,
      products,
      mockRedeemProduct
    );

    expect(getAllByTestId('product').length).toBe(products.length);
  });
});
