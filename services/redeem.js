import fetch from 'isomorphic-unfetch';

import { endpoint } from '../config';

export const redeem = async productId => {
  const response = await fetch(`${endpoint}/redeem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ productId })
  });
  const json = await response.json();

  return json;
};
