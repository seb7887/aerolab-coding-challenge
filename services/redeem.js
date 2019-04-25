import fetch from 'isomorphic-unfetch';

import config from '../config';

const { apiEndpoint } = config;

export const redeem = async productId => {
  const response = await fetch(`${apiEndpoint}/redeem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ productId })
  });
  const json = await response.json();

  return json;
};
