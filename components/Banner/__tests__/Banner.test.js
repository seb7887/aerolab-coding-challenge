import { render } from 'react-testing-library';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/theme';

import Banner from '../index';

const renderBanner = ({ theme, title }) =>
  render(
    <ThemeProvider theme={theme}>
      <Banner>{title}</Banner>
    </ThemeProvider>
  );

describe('Banner', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = renderBanner({ theme, title: 'Electronics' });

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display Electronics title', () => {
    const { getByText } = renderBanner({ theme, title: 'Electronics' });

    expect(getByText(/electronics/i)).toBeTruthy();
  });
});
