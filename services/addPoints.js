import fetch from 'isomorphic-unfetch';

import { endpoint } from '../config';

export const addPoints = async () => {
  const response = await fetch(`${endpoint}/user/points`, {
    method: 'GET'
  });
  const json = await response.json();

  return json;
};
