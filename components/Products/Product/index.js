import React from 'react';

import BuyIcon from './BuyIcon';

import { Container, Img, Content } from './style';

const Product = ({ product }) => (
  <Container>
    <Content>
      <div className='buy'>
        <BuyIcon />
      </div>
      <Img src={product.img.url} alt={product.name} />
      <div className='description'>
        <span className='category'>{product.category}</span>
        <span className='name'>{product.name}</span>
      </div>
    </Content>
  </Container>
);

export default Product;
