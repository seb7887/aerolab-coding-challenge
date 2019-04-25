import React from 'react';

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

export default History;
