import fetch from 'isomorphic-unfetch';

import config from '../config';

const { token, apiEndpoint } = config;

export const getProducts = async () => {
  const response = await fetch(`${apiEndpoint}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  const json = await response.json();

  return json;
};
