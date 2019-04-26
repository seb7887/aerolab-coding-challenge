import { render } from 'react-testing-library';

import Banner from '../index';

const renderBanner = () => render(<Banner>Electronics</Banner>);

describe('Banner', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = renderBanner();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display Electronics title', () => {
    const { getByText } = renderBanner();

    expect(getByText(/electronics/i)).toBeTruthy();
  });
});
