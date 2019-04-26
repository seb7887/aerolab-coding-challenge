import { render } from 'react-testing-library';

import HistoryItem from '../index';

import { fakeHistoryItem } from '../../../../utils/testUtils';
import formatDate from '../../../../utils/formatDate';

describe('HistoryItem', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = render(<HistoryItem item={fakeHistoryItem} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display product description', () => {
    const { getByTestId } = render(<HistoryItem item={fakeHistoryItem} />);

    expect(getByTestId('create-date').textContent).toBe(
      formatDate(fakeHistoryItem.createDate)
    );
    expect(getByTestId('category').textContent).toBe(fakeHistoryItem.category);
    expect(getByTestId('name').textContent).toBe(fakeHistoryItem.name);
  });
});
