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

const Product = ({ product, userPoints, redeemProduct }) => (
  <Container data-testid='product'>
    <Content>
      <div className='buy'>
        {userPoints < product.cost ? (
          <NeedCoins data-testid='need-coins'>
            You need {product.cost - userPoints} <Coin />
          </NeedCoins>
        ) : (
          <BuyIcon color='orange' />
        )}
      </div>
      <Img src={product.img.url} alt={product.name} />
      <div className='description'>
        <span className='category' data-testid='category'>
          {product.category}
        </span>
        <span className='name' data-testid='name'>
          {product.name}
        </span>
      </div>
      {userPoints >= product.cost && (
        <div className='overlay'>
          <div className='buy'>
            <BuyIcon color='white' />
          </div>
          <OverlayBlock>
            <div className='cost-block'>
              <span className='cost' data-testid='cost'>
                {product.cost}
              </span>
              <Coin />
            </div>
            <RedeemButton
              onClick={() => redeemProduct(product._id)}
              data-testid='redeem-button'
            >
              Redeem Now
            </RedeemButton>
          </OverlayBlock>
        </div>
      )}
    </Content>
  </Container>
);

export default Product;
