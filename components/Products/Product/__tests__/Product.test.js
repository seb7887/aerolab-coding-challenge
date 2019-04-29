import { render, fireEvent } from 'react-testing-library';

import Product from '../index';

import { generateProduct, fakeProduct } from '../../../../utils/testUtils';

const mockRedeemProduct = jest.fn();

let userPoints = 300;
const product = generateProduct();

describe('Product', () => {
  it('should display product description', () => {
    const { getByTestId } = render(
      <Product
        product={product}
        userPoints={userPoints}
        redeemProduct={mockRedeemProduct}
      />
    );

    expect(getByTestId('category').textContent).toBe(product.category);
    expect(getByTestId('name').textContent).toBe(product.name);
  });

  it('should display coins needed if user cannot afford it', () => {
    const pointsToReach = product.cost - userPoints;
    const { getByTestId } = render(
      <Product
        product={product}
        userPoints={userPoints}
        redeemProduct={mockRedeemProduct}
      />
    );

    expect(getByTestId('need-coins')).toBeTruthy();
    expect(getByTestId('need-coins').textContent).toContain(
      `You need ${pointsToReach}`
    );
  });

  it('should display product cost and redeem button if user can affort it', () => {
    userPoints = 900;
    const { getByTestId } = render(
      <Product
        product={product}
        userPoints={userPoints}
        redeemProduct={mockRedeemProduct}
      />
    );

    expect(getByTestId('cost').textContent).toBe(product.cost.toString());
    expect(getByTestId('redeem-button').textContent).toBe('Redeem Now');
  });

  it('should redeem if button is pressed', () => {
    userPoints = 900;
    const { getByTestId } = render(
      <Product
        product={product}
        userPoints={userPoints}
        redeemProduct={mockRedeemProduct}
      />
    );

    fireEvent.click(getByTestId('redeem-button'));

    expect(mockRedeemProduct).toHaveBeenCalledTimes(1);
  });

  it('renders and matches snapshot', () => {
    userPoints = 900;
    const { asFragment } = render(
      <Product
        product={fakeProduct}
        userPoints={userPoints}
        redeemProduct={mockRedeemProduct}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
