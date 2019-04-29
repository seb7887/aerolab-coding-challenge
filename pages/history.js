import React from 'react';

import { getHistory } from '../services';

import HistoryGrid from '../components/HistoryGrid';

class History extends React.Component {
  static async getInitialProps() {
    const history = await getHistory();

    return {
      history
    };
  }

  render() {
    return <HistoryGrid {...this.props} />;
  }
}

export default History;
