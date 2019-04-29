import { render } from 'react-testing-library';

import HistoryGrid from '../index';

import { fakeHistoryItems } from '../../../utils/testUtils';

const renderHistoryGrid = () =>
  render(<HistoryGrid history={fakeHistoryItems} />);

describe('HistoryGrid', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = renderHistoryGrid();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display a correct quantity of products', () => {
    const { getAllByTestId } = renderHistoryGrid();

    expect(getAllByTestId('history-item').length).toBe(fakeHistoryItems.length);
  });
});
