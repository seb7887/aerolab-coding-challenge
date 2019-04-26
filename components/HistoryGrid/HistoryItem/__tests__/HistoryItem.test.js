import { render } from 'react-testing-library';

import HistoryItem from '../index';

import { fakeHistoryItem } from '../../../../utils/testUtils';
import formatDate from '../../../../utils/formatDate';

const renderHistoryItem = () => render(<HistoryItem item={fakeHistoryItem} />);

describe('HistoryItem', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = renderHistoryItem();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display product description', () => {
    const { getByTestId } = renderHistoryItem();

    expect(getByTestId('create-date').textContent).toBe(
      formatDate(fakeHistoryItem.createDate)
    );
    expect(getByTestId('category').textContent).toBe(fakeHistoryItem.category);
    expect(getByTestId('name').textContent).toBe(fakeHistoryItem.name);
  });
});
