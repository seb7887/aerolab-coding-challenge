import { render } from 'react-testing-library';

import Sort from '../index';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

let mockProps = {
  category: 'all',
  sort: 'recent',
  page: '0',
  total: 32
};

const renderSort = props => render(<Sort {...props} />);

describe('Sort', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = renderSort(mockProps);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display correct quantity', () => {
    const { getByText } = renderSort(mockProps);

    expect(getByText(/16 of 32/i)).toBeTruthy();
  });

  it('should display three sort filter buttons', () => {
    const { getAllByTestId } = renderSort(mockProps);

    expect(getAllByTestId('sort-filter').length).toBe(3);
  });

  it('should display only next button if it is the first page', () => {
    const { getByTestId, queryByTestId } = renderSort(mockProps);

    expect(queryByTestId('back-button')).toBeNull();
    expect(getByTestId('next-button')).not.toBeNull();
  });

  it('should display both button if it is not the first or the last page', () => {
    mockProps.page = '1';
    mockProps.total = 48;
    const { getByTestId } = renderSort(mockProps);

    expect(getByTestId('back-button')).not.toBeNull();
    expect(getByTestId('next-button')).not.toBeNull();
  });

  it('should display only next button if it is the first page', () => {
    mockProps.page = '1';
    mockProps.total = 32;
    const { getByTestId, queryByTestId } = renderSort(mockProps);

    expect(getByTestId('back-button')).not.toBeNull();
    expect(queryByTestId('next-button')).toBeNull();
  });
});
