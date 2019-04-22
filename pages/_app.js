import React from 'react';
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import configureStore from '../store';

import Layout from '../containers/Layout';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(MyApp);
