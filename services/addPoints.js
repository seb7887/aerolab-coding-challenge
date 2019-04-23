import fetch from 'isomorphic-unfetch';

import config from '../config';

const { token, apiEndpoint } = config;

export const addPoints = async () => {
  const response = await fetch(`${apiEndpoint}/user/points`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      amount: 1000
    })
  });
  const json = await response.json();

  return json;
};
