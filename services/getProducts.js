import fetch from 'isomorphic-unfetch';

import { endpoint } from '../config';

export const getProducts = async ({
  page = 0,
  sort = 'recent',
  category = 'all'
}) => {
  const response = await fetch(
    `${endpoint}/products?category=${category}&sort=${sort}&page=${page}`,
    {
      method: 'GET'
    }
  );
  const json = await response.json();

  return json;
};
