import React from 'react';

import BuyIcon from './BuyIcon';
import Coin from '../../shared/Coin';

import {
  Container,
  Img,
  Content,
  OverlayBlock,
  RedeemButton,
  NeedCoins
} from './style';

const Product = ({ product, userPoints }) => (
  <Container>
    <Content>
      <div className='buy'>
        {userPoints < product.cost ? (
          <NeedCoins>
            You need {product.cost - userPoints} <Coin />
          </NeedCoins>
        ) : (
          <BuyIcon color='orange' />
        )}
      </div>
      <Img src={product.img.url} alt={product.name} />
      <div className='description'>
        <span className='category'>{product.category}</span>
        <span className='name'>{product.name}</span>
      </div>
      {userPoints >= product.cost && (
        <div className='overlay'>
          <div className='buy'>
            <BuyIcon color='white' />
          </div>
          <OverlayBlock>
            <div className='cost-block'>
              <span className='cost'>{product.cost}</span>
              <Coin />
            </div>
            <RedeemButton>Redeem Now</RedeemButton>
          </OverlayBlock>
        </div>
      )}
    </Content>
  </Container>
);

export default Product;
