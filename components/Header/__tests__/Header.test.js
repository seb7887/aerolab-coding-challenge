import { render, fireEvent } from 'react-testing-library';
import Router from 'next/router';

import { addPoints as mockAddPointsService } from '../../../services';
import Header from '../index';
import { fakeUser } from '../../../utils/testUtils';

const mockChangeTheme = jest.fn();

jest.mock('../../../services', () => {
  return {
    addPoints: jest.fn(() => Promise.resolve())
  };
});

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

Router.router = {
  pathname: '/',
  push: () => {},
  prefetch: () => {}
};

afterEach(() => {
  mockAddPointsService.mockClear();
});

const renderHeader = () =>
  render(
    <Header me={fakeUser} changeTheme={mockChangeTheme} isActive={false} />
  );

describe('Header', () => {
  it('renders and matches snapshot', () => {
    const { asFragment } = renderHeader();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display user name and points', () => {
    const { getByTestId } = renderHeader();

    expect(getByTestId('header').textContent).toContain(fakeUser.name);
    expect(getByTestId('header').textContent).toContain(fakeUser.points);
  });

  it('should add points', () => {
    const { getByTestId } = renderHeader();

    const points = getByTestId('points');
    fireEvent.click(points);

    expect(mockAddPointsService).toHaveBeenCalledTimes(1);
  });
});
