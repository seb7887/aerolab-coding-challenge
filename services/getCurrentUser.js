import fetch from 'isomorphic-unfetch';

import { endpoint } from '../config';

export const getCurrentUser = async () => {
  const response = await fetch(`${endpoint}/user/me`, {
    method: 'GET'
  });
  const json = await response.json();

  return json;
};
