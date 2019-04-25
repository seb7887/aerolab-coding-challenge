import fetch from 'isomorphic-unfetch';

import config from '../config';

const { apiEndpoint } = config;

export const getCurrentUser = async () => {
  const response = await fetch(`${apiEndpoint}/user/me`, {
    method: 'GET'
  });
  const json = await response.json();

  return json;
};
