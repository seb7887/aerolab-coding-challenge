import { render } from 'react-testing-library';

import HistoryGrid from '../index';

import { fakeHistoryItems } from '../../../utils/testUtils';

describe('HistoryGrid', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = render(<HistoryGrid history={fakeHistoryItems} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display a correct quantity of products', () => {
    const { getAllByTestId } = render(
      <HistoryGrid history={fakeHistoryItems} />
    );

    expect(getAllByTestId('history-item').length).toBe(fakeHistoryItems.length);
  });
});
