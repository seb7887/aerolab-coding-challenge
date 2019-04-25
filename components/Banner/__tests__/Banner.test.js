import { render } from 'react-testing-library';

import Banner from '../index';

describe('Banner', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = render(<Banner />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display Electronics title', () => {
    const { getByText } = render(<Banner />);

    expect(getByText(/electronics/i)).toBeTruthy();
  });
});
