import fetch from 'isomorphic-unfetch';

import config from '../config';

const { token, apiEndpoint } = config;

export const getCurrentUser = async () => {
  const response = await fetch(`${apiEndpoint}/user/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const json = await response.json();

  return json;
};
