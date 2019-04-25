import React from 'react';

import { getHistory } from '../services';

class History extends React.Component {
  static async getInitialProps() {
    const history = await getHistory();

    return {
      history
    };
  }

  render() {
    return <h1>History</h1>;
  }
}

export default History;
