import { render } from 'react-testing-library';

import ProductGrid from '../index';

import { generateProducts, fakeProducts } from '../../../../utils/testUtils';

const mockRedeemProduct = jest.fn();

const userPoints = 300;
const products = generateProducts(3);

describe('ProductGrid', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = render(
      <ProductGrid
        userPoints={userPoints}
        products={fakeProducts}
        redeemProduct={mockRedeemProduct}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display a correct quantity of products', () => {
    const { getAllByTestId } = render(
      <ProductGrid
        userPoints={userPoints}
        products={products}
        redeemProduct={mockRedeemProduct}
      />
    );

    expect(getAllByTestId('product').length).toBe(products.length);
  });
});
