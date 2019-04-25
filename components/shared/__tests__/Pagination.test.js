import { render } from 'react-testing-library';

import Pagination from '../Pagination';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

const category = 'all';
const sort = 'recent';
const perPage = 16;
let total = 32;
let page = 0;

describe('Pagination', () => {
  it('should display only next button if it is the first page', () => {
    const { getByTestId, queryByTestId } = render(
      <Pagination
        category={category}
        sort={sort}
        page={page}
        total={total}
        perPage={perPage}
      />
    );

    expect(queryByTestId('back-button')).toBeNull();
    expect(getByTestId('next-button')).not.toBeNull();
  });

  it('should display both button if it is not the first or the last page', () => {
    page = 1;
    total = 48;
    const { getByTestId } = render(
      <Pagination
        category={category}
        sort={sort}
        page={page}
        total={total}
        perPage={perPage}
      />
    );

    expect(getByTestId('back-button')).not.toBeNull();
    expect(getByTestId('next-button')).not.toBeNull();
  });

  it('should display only back button if it is the last page', () => {
    page = 1;
    total = 32;
    const { getByTestId, queryByTestId } = render(
      <Pagination
        category={category}
        sort={sort}
        page={page}
        total={total}
        perPage={perPage}
      />
    );

    expect(getByTestId('back-button')).not.toBeNull();
    expect(queryByTestId('next-button')).toBeNull();
  });
});
