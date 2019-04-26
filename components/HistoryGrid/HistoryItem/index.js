import React from 'react';
import PropTypes from 'prop-types';

import formatDate from '../../../utils/formatDate';

import { Container, Img } from './style';

const HistoryItem = ({ item }) => (
  <Container data-testid='history-item'>
    <div>
      <span data-testid='create-date'>{formatDate(item.createDate)}</span>
    </div>
    <Img src={item.img.url} alt={item.name} />
    <div className='description'>
      <span data-testid='category'>{item.category}</span>
      <span className='name' data-testid='name'>
        {item.name}
      </span>
    </div>
  </Container>
);

HistoryItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default HistoryItem;
