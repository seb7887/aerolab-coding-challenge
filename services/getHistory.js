import fetch from 'isomorphic-unfetch';

import { endpoint } from '../config';

export const getHistory = async () => {
  const response = await fetch(`${endpoint}/user/history`, {
    method: 'GET'
  });
  const history = await response.json();

  return history;
};
