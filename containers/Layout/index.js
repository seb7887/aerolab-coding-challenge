import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../utils/theme';

import { GlobalStyle, Page } from './style';

import Meta from './Meta';
import Header from '../../components/Header';

class Layout extends React.Component {
  state = {
    lightTheme: true
  };

  changeTheme = () => {
    const { lightTheme } = this.state;
    this.setState({ lightTheme: !lightTheme });
  };

  render() {
    const { lightTheme } = this.state;
    const { children, me } = this.props;

    return (
      <ThemeProvider theme={lightTheme ? theme.light : theme.dark}>
        <Page>
          <GlobalStyle />
          <Meta />
          <Header
            me={me}
            changeTheme={this.changeTheme}
            isActive={!lightTheme}
          />
          {children}
        </Page>
      </ThemeProvider>
    );
  }
}

export default Layout;
