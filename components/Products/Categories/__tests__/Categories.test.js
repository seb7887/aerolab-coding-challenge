import { render } from 'react-testing-library';

import Categories from '../index';

import { mockCategories } from '../../../../utils/testUtils';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

const category = 'all';
const sort = 'recent';

describe('Categories', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = render(
      <Categories category={category} sort={sort} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display Categories title', () => {
    const { getByText } = render(
      <Categories category={category} sort={sort} />
    );

    expect(getByText(/categories/i)).toBeTruthy();
  });

  it('should display all the categories', () => {
    const { getAllByTestId } = render(
      <Categories category={category} sort={sort} />
    );

    expect(getAllByTestId('category').length).toBe(mockCategories.length);
  });
});
