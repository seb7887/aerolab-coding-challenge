import { render } from 'react-testing-library';

import Sort from '../index';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

let page = 0;
const category = 'all';
const sort = 'recent';
let total = 32;

describe('Sort', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = render(
      <Sort category={category} sort={sort} page={page} total={total} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display correct quantity', () => {
    const { getByText } = render(
      <Sort category={category} sort={sort} page={page} total={total} />
    );

    expect(getByText(/16 of 32/i)).toBeTruthy();
  });

  it('should display three sort filter buttons', () => {
    const { getAllByTestId } = render(
      <Sort category={category} sort={sort} page={page} total={total} />
    );

    expect(getAllByTestId('sort-filter').length).toBe(3);
  });

  it('should display only next button if it is the first page', () => {
    const { getByTestId, queryByTestId } = render(
      <Sort category={category} sort={sort} page={page} total={total} />
    );

    expect(queryByTestId('back-button')).toBeNull();
    expect(getByTestId('next-button')).not.toBeNull();
  });

  it('should display both button if it is not the first or the last page', () => {
    page = 1;
    total = 48;
    const { getByTestId } = render(
      <Sort category={category} sort={sort} page={page} total={total} />
    );

    expect(getByTestId('back-button')).not.toBeNull();
    expect(getByTestId('next-button')).not.toBeNull();
  });

  it('should display only next button if it is the first page', () => {
    page = 1;
    total = 32;
    const { getByTestId, queryByTestId } = render(
      <Sort category={category} sort={sort} page={page} total={total} />
    );

    expect(getByTestId('back-button')).not.toBeNull();
    expect(queryByTestId('next-button')).toBeNull();
  });
});
