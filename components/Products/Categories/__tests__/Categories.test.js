import { render } from 'react-testing-library';

import Categories from '../index';

import { mockCategories } from '../../../../utils/testUtils';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

const mockProps = {
  category: 'all',
  sort: 'recent'
};

const renderCategories = props => render(<Categories {...props} />);

describe('Categories', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = renderCategories(mockProps);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display Categories title', () => {
    const { getByText } = renderCategories(mockProps);

    expect(getByText(/categories/i)).toBeTruthy();
  });

  it('should display all the categories', () => {
    const { getAllByTestId } = renderCategories(mockProps);

    expect(getAllByTestId('category').length).toBe(mockCategories.length);
  });
});
