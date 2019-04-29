import { render } from 'react-testing-library';

import Pagination from '../Pagination';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

let mockProps = {
  category: 'all',
  sort: 'recent',
  perPage: 16,
  total: 32,
  page: '0'
};

const renderPagination = props => render(<Pagination {...props} />);

describe('Pagination', () => {
  it('should display only next button if it is the first page', () => {
    const { getByTestId, queryByTestId } = renderPagination(mockProps);

    expect(queryByTestId('back-button')).toBeNull();
    expect(getByTestId('next-button')).not.toBeNull();
  });

  it('should display both button if it is not the first or the last page', () => {
    mockProps.page = '1';
    mockProps.total = 48;
    const { getByTestId } = renderPagination(mockProps);

    expect(getByTestId('back-button')).not.toBeNull();
    expect(getByTestId('next-button')).not.toBeNull();
  });

  it('should display only back button if it is the last page', () => {
    mockProps.page = '1';
    mockProps.total = 32;
    const { getByTestId, queryByTestId } = renderPagination(mockProps);

    expect(getByTestId('back-button')).not.toBeNull();
    expect(queryByTestId('next-button')).toBeNull();
  });
});
