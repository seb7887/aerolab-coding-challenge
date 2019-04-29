import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../Banner';
import HistoryItem from './HistoryItem';

import { Grid } from './style';

const History = ({ history }) => (
  <>
    <Banner>History</Banner>
    <Grid>
      {history.map(item => {
        return <HistoryItem key={item._id} item={item} />;
      })}
    </Grid>
  </>
);

History.propTypes = {
  history: PropTypes.array.isRequired
};

export default History;
