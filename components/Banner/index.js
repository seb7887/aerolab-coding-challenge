import React from 'react';

import { Content } from './style';

const Banner = ({ children }) => (
  <Content>
    <h1 className='title'>{children}</h1>
    <div className='overlay' />
  </Content>
);

export default Banner;
