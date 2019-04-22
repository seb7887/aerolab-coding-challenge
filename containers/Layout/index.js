import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../../utils/theme';

import { GlobalStyle, Page } from './style';

import { getCurrentUser } from '../../store/actions';
import { currentUserSelector } from '../../store/selectors';

import Meta from './Meta';
import Header from '../../components/Header';

class Layout extends React.Component {
  static async getInitialProps({ store }) {
    await store.dispatch(getCurrentUser());
  }

  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  render() {
    const { children, currentUser } = this.props;
    return (
      <ThemeProvider theme={theme.light}>
        <Page>
          <GlobalStyle />
          {!currentUser ? (
            <h1>Loading</h1>
          ) : (
            <>
              <Meta />
              <Header me={currentUser} />
              {children}
            </>
          )}
        </Page>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: currentUserSelector(state.currentUserReducer)
  };
};

Layout.propTypes = {
  getCurrentUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(Layout);
